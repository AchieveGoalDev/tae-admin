<script lang="ts">
  import type { SemesterData } from "$lib/data/semesterDefs";
  import LocalizedDatepicker from "$lib/datetime/LocalizedDatepicker.svelte";
  import { createSemester } from "$lib/api/data/semester";

  let inputData: SemesterData = {
    isCurrent: false,
    season: "秋",
    year: "2022",
    startDate: new Date(),
    endDate: new Date(),
    priorityEndDate: new Date(),
    priorityStartDate: new Date(),
  };

  let options = ["start", "end", "priorityStart", "priorityEnd"];
  let selected = "start";
  let selectedClass = "bg-green-200 p-2";
  let toApply = false;
  let date = new Date();

  function handleSelected(input: string) {
    selected = input;
  }

  function applySelected(input: Date, selected: string) {
    switch (selected) {
      case options[0]:
        inputData.startDate = input;
        break;
      case options[1]:
        inputData.endDate = input;
        break;
      case options[2]:
        inputData.priorityStartDate = input;
        break;
      case options[3]:
        inputData.priorityEndDate = input;
        break;
      default:
        console.log("Error applying selected date");
    }

    date = new Date();
    toApply = false;
  }

  $: inputData = inputData;
  $: selected = selected;
  $: if (toApply) {
    applySelected(date, selected);
  }
</script>

<div>
  <div>
    <label for="isCurrent"> Is Current Semester </label>
    <input
      type="checkbox"
      name="isCurrent"
      bind:checked={inputData.isCurrent}
    />
  </div>
  <div>
    <label for="season"> Semester Year </label>
    <select name="season" bind:value={inputData.season}>
      <option>春</option>
      <option>秋</option>
    </select>
  </div>
  <div>
    <label for="year"> Semester Year </label>
    <select name="year" bind:value={inputData.year}>
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
    </select>
  </div>
  <div class="flex flex-row w-full place-content-evenly">
    {#each options as option}
      {#if option === selected}
        <button
          class={selectedClass}
          disabled={true}
          on:click={() => handleSelected(option)}>{option}</button
        >
      {:else}
        <button on:click={() => handleSelected(option)}>{option}</button>
      {/if}
    {/each}
  </div>
  <LocalizedDatepicker bind:selected={date} />
  <button class="p-2 bg-primary-ultralight" on:click={() => (toApply = true)}
    >Apply Date</button
  >
  <button on:click={() => createSemester(inputData)}>submit</button>
</div>

{#key inputData}
  <pre>
    {JSON.stringify(inputData, null, 2)}
    {selected}
</pre>
{/key}
