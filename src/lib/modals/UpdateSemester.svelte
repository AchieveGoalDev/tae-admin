<script lang="ts">
  import { interfaceState } from "$lib/stores/interface";
  import type { SemesterData } from "$lib/data/semesterDefs";

  let inputData: SemesterData = {
    isCurrent: false,
    season: "秋",
    year: "2022",
    startDate: new Date(),
    endDate: new Date(),
    priorityEndDate: new Date(),
    priorityStartDate: new Date(),
  };

  $: inputData = inputData;
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
</div>

{#key inputData}
  <pre>
    {JSON.stringify(inputData, null, 2)}
</pre>
{/key}
