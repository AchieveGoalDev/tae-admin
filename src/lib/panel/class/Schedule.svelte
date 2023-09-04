<script lang="ts">
  //@ts-nocheck
  import { fly } from "svelte/transition";
  import { interfaceState } from "$lib/stores/interface";
  import { context, fetchSlotData } from "$lib/stores/dataContext";
  import type { Class, TimeSlot } from "$lib/data/scheduleDefs";
  import type { Campus } from "$lib/data/campusDefs";

  import TableHeader from "$lib/panel/tables/TableHeader.svelte";
  import TableRow from "$lib/panel/tables/TableRow.svelte";
  import TableCell from "$lib/panel/tables/TableCell.svelte";
  import HeaderCell from "$lib/panel/tables/HeaderCell.svelte";

  let campuses: Campus[] = ["白山", "WELLB", "INIAD", "川越", "板倉"];
  let selectedCampus: Campus = "白山";

  function invokeTimeslotModal() {
    $interfaceState.modal = "createTimeslot";
    $interfaceState.showModal = true;
  }

  async function refreshSlotData(trigger: boolean) {
    console.log("refresh triggered");

    const fetchedData = await fetchSlotData();
    if (fetchedData) {
      $context.timeslots = fetchedData.data;
    }

    return !trigger;
  }

  $: $interfaceState.campus = selectedCampus;
  $: console.log($interfaceState.dataRefresh);
  $: if ($interfaceState.dataRefresh) {
    $interfaceState.refreshStamp = new Date().getTime();
    $interfaceState.dataRefresh = refreshSlotData();
  }
</script>

<div>
  <div class="flex flex-row place-content-between w-full px-5 items-center">
    {#key selectedCampus}
      <div in:fly class="text-4xl font-black">
        {selectedCampus}
      </div>
    {/key}
    <div class="flex flex-col">
      <label class="font-bold mb-2 text-dark-ultradark text-lg" for="campus"
        >キャンパス選択</label
      >
      <select
        name="campus"
        class="bg-primary-dark p-2 text-lg font-bold shadow-md text-neutral-ultralight"
        bind:value={selectedCampus}
      >
        {#each campuses as campus}
          <option value={campus}>{campus}</option>
        {/each}
      </select>
    </div>
  </div>
  <hr class="my-5 border-1 border-primary-ultradark w-[98%] mx-auto" />
  <div class="shadow-md bg-neutral-ultralight w-[98%] mx-auto p-5">
    <h1 class="text-2xl font-black">時刻表管理</h1>
    <div
      class="flex flex-col mx-auto w-2/3 bg-neutral-ultralight mt-3 shadow-md"
    >
      {#key $interfaceState.refreshStamp}
        {#if $context.timeslots}
          <TableHeader length={3}>
            <HeaderCell>大学時間割</HeaderCell>
            <HeaderCell>順番</HeaderCell>
            <HeaderCell>開始・終了時間</HeaderCell>
          </TableHeader>
          {#each $context.timeslots as slot, i}
            <TableRow length={3} index={i}>
              <TableCell>{slot.period}限</TableCell>
              <TableCell>{slot.order}</TableCell>
              <TableCell>{slot.start} - {slot.end}</TableCell>
            </TableRow>
          {/each}
        {/if}
      {/key}
      <button
        class="w-full bg-primary-dark transition-all rounded-md text-lg text-neutral-ultralight hover:bg-primary-medium"
        on:click={invokeTimeslotModal}>+</button
      >
    </div>
  </div>

  <h1 class="text-3xl">授業管理</h1>
</div>
