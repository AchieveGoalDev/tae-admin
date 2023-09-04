<script lang="ts">
  import type { TimeSlot } from "$lib/data/scheduleDefs";
  import type { Campus } from "$lib/data/campusDefs";
  import { user } from "$lib/stores/user";
  import { interfaceState } from "$lib/stores/interface";
  import { handleAPIDataPost } from "$lib/api/RESTFunctions";

  let startHour = "";
  let startMin = "";
  let endHour = "";
  let endMin = "";

  let toSubmit: TimeSlot = {
    createdOn: new Date().valueOf(),
    updatedOn: new Date().valueOf(),
    createdBy: `${$user.last} ${$user.first}`,
    updateHistory: [],
    campus: $interfaceState.campus,
    start: `${startHour}:${startMin}`,
    end: `${endHour}:${endMin}`,
    period: "",
    order: 0,
    classes: [],
  };

  $: toSubmit = toSubmit;
  $: updateTime(startHour, startMin, endHour, endMin);

  function updateTime(
    startH: string,
    startM: string,
    endH: string,
    endM: string
  ) {
    toSubmit.start = `${startH}:${startM}`;
    toSubmit.end = `${endH}:${endM}`;
  }

  function submitData() {
    handleAPIDataPost("SLOT", "CREATE", toSubmit);
    $interfaceState.dataRefresh = true;
    $interfaceState.showModal = false;
  }
</script>

<form class="text-dark-dark">
  {$interfaceState.campus}

  <div class="flex flex-col">
    <h3>開始時間</h3>
    <div>
      <input class="w-[2.5rem]" bind:value={startHour} maxlength="2" />時
      <input class="w-[2.5rem]" bind:value={startMin} maxlength="2" />分
    </div>

    <h3>終了時間</h3>
    <div>
      <input class="w-[2.5rem]" bind:value={endHour} maxlength="2" />時
      <input class="w-[2.5rem]" bind:value={endMin} maxlength="2" />分
    </div>

    <h3>大学時間割</h3>
    <input class="w-[7rem]" bind:value={toSubmit.period} />

    <h3>順番</h3>
    <span><input bind:value={toSubmit.order} />時間帯目</span>
  </div>
  <button on:click|preventDefault={submitData}>Submit</button>
  <pre>
    {#key toSubmit}
      {JSON.stringify(toSubmit, null, 2)}
    {/key}
  </pre>
</form>
