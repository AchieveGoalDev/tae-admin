<script lang="ts">
  import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";
  import { slide } from "svelte/transition";

  import AddNew from "$lib/buttons/AddNew.svelte";
  import TableHeader from "$lib/panel/tables/TableHeader.svelte";
  import TableRow from "$lib/panel/tables/TableRow.svelte";
  import { handleDBPut } from "$lib/api/event/postToDb";
  import { InlineCalendar, Swappable } from "svelte-calendar";
  import "dayjs/locale/ja.js";
  import dayjs from "dayjs";

  import "iconify-icon";

  $: dayjs.locale("ja");

  console.log(PUBLIC_API_GATEWAY_URL);

  const click = () => {
    handleDBPut(testData, PUBLIC_API_GATEWAY_URL + "/events");
  };

  let testData = {
    name: "testEvent",
    eventDate: "tomorrow",
  };
</script>

<div
  transition:slide
  class="w-full grid grid-cols-3 items-center justify-center"
>
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

<div transition:slide class="bg-white shadow-lg mx-2 rounded-md ">
  <TableHeader />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />
  <TableRow />

  <div class="flex justify-center">
    <div class="shadow-md my-3">
      <Swappable value={"jp"}>
        <InlineCalendar />
      </Swappable>
    </div>
  </div>
</div>
