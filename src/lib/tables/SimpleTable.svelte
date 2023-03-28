<script lang="ts">
  import type { SimpleTable } from "$lib/tables/TableDefs";

  export let data: SimpleTable;
</script>

<table
  class="table-auto bg-slate-50 lg:min-w-[1200px] mx-auto text-xl shadow-md"
>
  <thead
    class="border-2 border-slate-700 bg-primary-medium font-bold text-3xl text-white"
  >
    <td class="text-center" colspan={data.colspan}>
      <div class="my-2 w-full">
        {data.title}
      </div>
    </td>
  </thead>
  <tbody>
    {#each data.rows as row}
      <tr>
        {#each row.cells as cell}
          <td>{cell.content}</td>
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
