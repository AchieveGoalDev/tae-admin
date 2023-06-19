<script lang="ts">
  import AddNew from "$lib/buttons/AddNew.svelte";
  import TableHeader from "$lib/panel/tables/TableHeader.svelte";
  import TableRow from "$lib/panel/tables/TableRow.svelte";

  import "iconify-icon";

  const click = () => {
    console.log("click");
  };
</script>

<div class="w-full grid grid-cols-3 items-center justify-center">
  <div
    class="col-span-1 mx-auto flex flex-row items-center bg-neutral-ultralight h-[2rem] shadow-sm w-[15rem]"
  >
    <iconify-icon icon="ic:outline-search" class="text-xl mr-1" />
    <input class="bg-neutral-ultralight focus:outline-none" />
  </div>

  <h2 class="col-span-1 mx-auto text-3xl font-bold">学外管理</h2>

  <div class=" col-span-1 justify-self-end p-1 mx-auto">
    <AddNew addFunction={click} />
  </div>
</div>

<div class="bg-white shadow-lg mx-2 rounded-md">
  <TableHeader />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
</div>
