<script lang="ts">
  import { slide } from "svelte/transition";
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  import { COURSES, LEVELS, CAMPUSES } from "$lib/admin/data/application";

  import StudentRowPanel from "$lib/admin/expandable-rows/StudentRowPanel.svelte";
  import { StudentPanel } from "$lib/admin/panels/panelDefs.svelte";

  import type {
    Course,
    TestHistory,
    Student,
  } from "$lib/admin/data/application";

  import type { Personal } from "$lib/admin/data/personal";

  export let index: number;
  export let data: Student;

  let expanded = false;
  let edit = false;

  function handleExpanded() {
    expanded = !expanded;
  }

  function handleStyle() {
    if (index % 2 === 0) {
      return "flex items-center w-full h-[50px] bg-primary-ultralight grid grid-cols-12";
    } else {
      return "flex items-center w-full h-[50px] grid grid-cols-12";
    }
  }

  $: data.courseData.checkIsValid();
</script>

<div class="flex">
  <button on:click={handleExpanded}>+</button>
  <div class={handleStyle()}>
    <div class="col-start-1 col-end-2">{data.personalData.number}</div>
    <div class="col-start-3 col-end-4">{data.personalData.name}</div>
    <div class="col-start-5 col-end-6">{data.courseData.campus}</div>
    <div class="col-start-7 col-end-8">{data.courseData.type}</div>
    <div class="col-start-9 col-end-10">{data.isValid}</div>
  </div>
</div>
{#if expanded}
  <div transition:slide class="bg-white">
    <StudentRowPanel data={StudentPanel} {edit} studentData={data} />
  </div>
{/if}
