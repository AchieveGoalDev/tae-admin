<script lang="ts">
  //@ts-nocheck
  import { slide } from "svelte/transition";
  import { context, fetchCourseData } from "$lib/stores/dataContext";
  import type { Course } from "$lib/data/courseDefs";
  import { user } from "$lib/stores/user";
  import { handleAPIDataPost } from "$lib/api/RESTFunctions";

  import TableHeader from "$lib/panel/tables/TableHeader.svelte";
  import TableRow from "$lib/panel/tables/TableRow.svelte";
  import TableCell from "$lib/panel/tables/TableCell.svelte";
  import HeaderCell from "$lib/panel/tables/HeaderCell.svelte";

  let toSubmit: Course = {
    createdBy: `${$user.last} ${$user.first} `,
    updateHistory: [],
    createdOn: new Date().getTime(),
    updatedOn: new Date().getTime(),
    courseName: "",
    key: "",
    textbooks: [],
    isOnline: false,
    type: "group",
    level: "中級",
  };

  let triggerRefresh = false;

  function submitData() {
    handleAPIDataPost("COURSE", "CREATE", toSubmit);
    triggerRefresh = true;
  }

  async function refreshCourseData(trigger: boolean) {
    const fetchedData = await fetchCourseData();
    if (fetchedData) {
      $context.courses = fetchedData.data;
    }

    return !trigger;
  }

  $: triggerRefresh = refreshCourseData(triggerRefresh);
  $: console.log($context.courses);
  $: toSubmit = toSubmit;
  $: console.log(toSubmit);
</script>

<form>
  <div class="flex flex-column py-3">
    <label for="courseName">講座名</label>
    <input name="courseName" type="text" bind:value={toSubmit.courseName} />
  </div>

  <div class="flex flex-column py-3">
    <label for="courseKey">講座コード　（例：GB、 OI、GAなど）</label>
    <input name="courseKey" type="text" bind:value={toSubmit.key} />
  </div>

  <div class="flex flex-column py-3">
    <label for="isOnline"> オンライン講座 </label>
    <input name="isOnline" type="checkbox" bind:checked={toSubmit.isOnline} />
  </div>

  <div class="flex flex-column py-3">
    <label for="level"> スタイル </label>
    <select
      name="level"
      class="bg-primary-ultralight p-2 ml-2 rounded-sm shadow-sm"
      bind:value={toSubmit.type}
    >
      <option value="group" class="bg-white">グループ</option>
      <option value="mtm" class="bg-white">マンツーマン</option>
    </select>
  </div>

  <div>
    {#if toSubmit.type === "mtm"}
      <div transition:slide|local class="flex flex-column py-3">
        <label for="level"> レベル （ctrlで複数選択可） </label>
        <select name="level" multiple bind:value={toSubmit.level}>
          <option value="初級">初級</option>
          <option value="初中級">初中級</option>
          <option value="中級">中級</option>
          <option value="上級">上級</option>
        </select>
      </div>
    {:else}
      <div transition:slide|local class="flex flex-column py-3">
        <label for="level"> レベル </label>
        <select name="level" bind:value={toSubmit.level}>
          <option value="初級">初級</option>
          <option value="初中級">初中級</option>
          <option value="中級">中級</option>
          <option value="上級">上級</option>
        </select>
      </div>
    {/if}
  </div>
  <div class="flex flex-row">
    <div>
      <label for="textbooks">教科書選択 （ctrlで複数選択可）</label>
      <select name="textbooks" multiple bind:value={toSubmit.textbooks}>
        {#if $context}
          {#each $context.textbooks as textbook}
            <option value={textbook.key}>{textbook.title}</option>
          {/each}
        {/if}
      </select>
    </div>

    <div>
      <h3>Selected</h3>
      <div>
        {#each toSubmit.textbooks as textbook}
          {textbook}
        {/each}
      </div>
    </div>
  </div>

  <button on:click|preventDefault={submitData}>Submit</button>
</form>

<div class="flex flex-col mx-auto w-2/3 bg-neutral-ultralight mt-3 shadow-md">
  {#key $context.courses}
    {#if $context.courses}
      <TableHeader length={3}>
        <HeaderCell>タイトル</HeaderCell>
        <HeaderCell>テキストコード</HeaderCell>
        <HeaderCell>対象レベル</HeaderCell>
      </TableHeader>
      {#each $context.courses as course, i}
        <TableRow length={3} index={i}>
          <TableCell>{course.courseName}</TableCell>
          <TableCell>{course.key}</TableCell>
          <TableCell>{course.level}</TableCell>
        </TableRow>
      {/each}
    {/if}
  {/key}
</div>
