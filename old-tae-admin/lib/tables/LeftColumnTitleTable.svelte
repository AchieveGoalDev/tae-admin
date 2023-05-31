<script lang="ts">
  import TableWrapper from "$lib/tables/TableWrapper.svelte";
  import TableContent from "$lib/tables/TableContent.svelte";

  import type { TableContainer } from "./TableDefs";

  export let tableData: TableContainer;

  let wrapperData = {
    title: tableData.title,
    cols: tableData.cols,
    footer: tableData.footer,
  };
</script>

<TableWrapper {wrapperData}>
  {#each tableData.tables as table}
    <TableContent tableData={table} />
  {/each}
</TableWrapper>
