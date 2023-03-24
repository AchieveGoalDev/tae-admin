<script lang="ts">
  import type { Table } from "./TableDefs";
  import type { CellData } from "./TableDefs";
  export let tableData: Table;

  function handleCellClass(cell: CellData) {
    let returnClass = "border-b-2 border-r-2 border-slate-700 text-center";

		if (cell.isBold){
			returnClass += " font-bold"
		}

		if(cell.isTitle){
			returnClass += " bg-sky-50"
		}
    return returnClass;
  }
</script>

{#each tableData.rows as row, i}
  {#if i === 0}
    <tr>
      <th
        class="w-1/5 border-r-2 border-b-2 border-l-2 border-slate-700 bg-sky-100"
        rowspan={tableData.rows.length}
        colspan={tableData.colspan}
      >
        {tableData.title}
      </th>
      {#each row.cells as cell}
        <td class={handleCellClass(cell)}>
          {cell.content}
        </td>
      {/each}
    </tr>
  {:else}
    <tr>
      {#each row.cells as cell}
        <td class={handleCellClass(cell)}>
          {cell.content}
        </td>
      {/each}
    </tr>
  {/if}
{/each}
