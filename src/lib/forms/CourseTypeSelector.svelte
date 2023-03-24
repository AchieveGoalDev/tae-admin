<script lang="ts">
  import { slide } from "svelte/transition";
  import type { Campus } from "$lib/forms/ApplicationData";

  export let data: Campus;
  export let type: string;
  export let isValid: boolean;

  let courses: string[] = [];

  $: if (type) {
    isValid = true;
  } else {
    isValid = false;
  }

  function checkCampusCourses(campus: Campus) {
    let returnVals: string[] = [];

    if (campus.group.length > 0) {
      returnVals.push("グループレッスン");
    }

    if (campus.mtm.length > 0) {
      returnVals.push("マンツーマンレッスン");
    }

    return returnVals;
  }

  $: courses = checkCampusCourses(data);
</script>

{#if data}
  <select transition:slide bind:value={type} class="inline">
    <option value="">--講座を選択--</option>
    {#each courses as course}
      <option value={course}>{course}</option>
    {/each}
  </select>
{/if}
