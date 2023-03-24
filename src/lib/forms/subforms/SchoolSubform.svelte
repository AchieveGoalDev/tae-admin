<script lang="ts">
  import { campus, level, course, mtm } from "$lib/store/schoolSubform";

  import { fly, slide } from "svelte/transition";

  import {
    triggerCampusUpdate,
    triggerCourseUpdate,
    triggerLevelUpdate,
  } from "$lib/store/formUpdates";

  import {
    月第1,
    月第2,
    月第3,
    火第1,
    火第2,
    火第3,
    水第1,
    水第2,
    水第3,
    木第1,
    木第2,
    木第3,
    金第1,
    金第2,
    金第3,
    テキスト,
  } from "$lib/store/scheduleSubform";

  import SelectInput from "$lib/forms/input/SelectInput.svelte";
  import ImageSelect from "$lib/forms/input/ImageSelect.svelte";

  import FormSectionHeading from "../text/FormSectionHeading.svelte";

  import {
    campusSelector,
    levelSelector,
    courseSelector,
  } from "$lib/forms/subforms/SchoolSubformData";

  import { campuses } from "$lib/forms/ApplicationData";
  import type { CampusOfferings } from "$lib/forms/ApplicationData";

  type Nullable<T> = T | undefined;
  type SchoolSubformData = {
    campus: string;
    level: string;
    course: string;
    mtm: string;
  };

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let data: Nullable<SchoolSubformData>;

  let allLevels = ["初級", "初中級", "中級", "上級"];
  let campusIsValid = false;
  let levelIsValid = false;
  let courseIsValid = false;
  let updateValue: string;

  function resetScheduleData() {
    $月第1 = "";
    $月第2 = "";
    $月第3 = "";
    $火第1 = "";
    $火第2 = "";
    $火第3 = "";
    $水第1 = "";
    $水第2 = "";
    $水第3 = "";
    $木第1 = "";
    $木第2 = "";
    $木第3 = "";
    $金第1 = "";
    $金第2 = "";
    $金第3 = "";
    $テキスト = "";
  }

  function handleCourseName(course: string) {
    if (course === "MTM") {
      return "マンツーマンレッスン";
    } else if (course === "GROUP") {
      return "グループレッスン";
    }
  }

  function updateCampus(payload: string) {
    if ($triggerCampusUpdate && payload) {
      $course = "";
      $level = "";
      $mtm = "";
      resetScheduleData();
      campuses.forEach((campus) => {
        if (campus.name === payload) {
          //@ts-ignore
          courseSelector.options = campus.courses.map((course) =>
            handleCourseName(course)
          );
          levelSelector.options = campus.levels;
        }
      });
      $triggerCampusUpdate = false;
    }
  }

  function updateCourse(payload: string) {
    if ($triggerCourseUpdate && payload) {
      console.log("course update", payload);
      resetScheduleData();
      if (payload === "マンツーマンレッスン") {
        levelSelector.options = allLevels;
      } else if (payload === "グループレッスン") {
        //Can't name the below variable 'campus' because it conflicts with the store variable
        campuses.forEach((option) => {
          if (option.name === $campus) {
            levelSelector.options = campus?.levels;
          }
        });
      }
      $level = "";
      $triggerCourseUpdate = false;
    }
  }

  function updateLevel(payload: string) {
    if ($triggerLevelUpdate && payload) {
      resetScheduleData();
      $triggerLevelUpdate = false;
    }
  }

  function calculatePercentValid(
    campus: boolean,
    level: boolean,
    course: boolean,
    mtm: boolean
  ) {
    let toValidate = 3;
    let validTotal = 0;
    if (campus) {
      validTotal++;
    }

    if (course) {
      validTotal++;
    }

    if (mtm || level) {
      validTotal++;
    }

    console.log(validTotal);

    return (validTotal / toValidate) * 100;
  }

  $: percentValid = calculatePercentValid(
    Boolean($campus),
    Boolean($level),
    Boolean($course),
    Boolean($mtm)
  );

  $: updateCampus($campus);
  $: updateCourse($course);
  $: updateLevel($level);

  $: console.log($campus, $course, $level);
</script>

<div
  bind:clientHeight={selfHeight}
  transition:slide
  class="my-20 bg-white shadow-md px-5 row-span-full col-span-full top-0 inset-x-0"
>
  <ImageSelect
    bind:isValid={campusIsValid}
    data={campusSelector}
    on:updateSelect={() => {
      $triggerCampusUpdate = true;
    }}
    bind:value={$campus}
  >
    <FormSectionHeading>キャンパスを選択してください</FormSectionHeading>
  </ImageSelect>

  <div class="w-full h-[20px]" />
  {#if $campus}
    <SelectInput
      bind:isValid={courseIsValid}
      on:updateSelect={() => {
        $triggerCourseUpdate = true;
      }}
      bind:value={$course}
      data={courseSelector}
    >
      <FormSectionHeading>受講スタイルを選択してください</FormSectionHeading>
    </SelectInput>
    {#if $course}
      <SelectInput
        bind:isValid={levelIsValid}
        data={levelSelector}
        on:updateSelect={() => {
          $triggerLevelUpdate = true;
        }}
        bind:value={$level}
      >
        <FormSectionHeading>受講コースを選択してください</FormSectionHeading>
      </SelectInput>
    {/if}
  {/if}
</div>
