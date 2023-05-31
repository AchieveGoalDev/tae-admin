<script lang="ts">
  import type { SimpleTable, Cell } from "$lib/tables/TableDefs";

  export let data: SimpleTable;

  function styleCell(cellData: Cell) {
    if (cellData.isBold && cellData.isTitle) {
      return " bg-secondary-ultralight font-black ";
    }
    if (cellData.isBold && !cellData.isTitle) {
      return " font-black ";
    }
    if (!cellData.isBold && cellData.isTitle) {
      return " bg-secondary-ultralight";
    }
  }
</script>

<table
  class="table-auto bg-slate-50 lg:min-w-[1200px] mx-auto text-xl shadow-lg my-10"
>
  <colgroup>
    {#each data.rowHeaders as header}
      <col />
    {/each}
  </colgroup>
  <thead
    class="bg-primary-medium font-bold text-2xl xl:text-3xl text-white border-l-[2px] border-r-[2px] border-t-[2px] border-primary-dark"
  >
    <td class="text-center" colspan={data.colspan}>
      <div class="my-2 w-full p-2">
        {data.title}
      </div>
    </td>
  </thead>
  <tbody>
    <tr>
      {#each data.rowHeaders as header}
        <td
          class={`${styleCell(
            header
          )} border-[2px] border-primary-dark text-2xl text-center p-1`}
          >{header.content}</td
        >
      {/each}
    </tr>
    {#each data.rows as row}
      <tr>
        {#each row.cells as cell}
          <td class={`${styleCell(cell)} border-[2px] border-primary-dark p-1`}
            >{cell.content}</td
          >
        {/each}
      </tr>
    {/each}
  </tbody>

  <!--
      <tfoot class="bg-yellow-50">
        <td
          colspan={data.cols}
          class="border-l-2 border-r-2 border-b-2 border-slate-700"
        >
          <div class="my-2 ml-2">
            <h2 class="font-bold text-2xl">
              {data.footer.title}
            </h2>
            {#each data.footer.content as footer}
              <div class="my-2">
                {#each footer as segment}
                  <p class="my-1">{segment}</p>
                {/each}
              </div>
            {/each}
          </div>
        </td>
      </tfoot>
  -->
</table>
