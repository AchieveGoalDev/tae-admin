<script lang="ts">
  import { fly } from "svelte/transition";
  import ProgressBar from "$lib/forms/input/ProgressBar.svelte";
  import SchoolSubform from "$lib/forms/subforms/SchoolSubform.svelte";
  import PersonalSubform from "./subforms/PersonalSubform.svelte";
  import ScheduleSubform from "$lib/forms/subforms/ScheduleSubform.svelte";
  import AgreeSubform from "$lib/forms/subforms/AgreeSubform.svelte";

  import { campus, course, level } from "$lib/store/schoolSubform";

  //@ts-ignore
  import * as animateScroll from "svelte-scrollto";

  let currentHeight: number;
  let indexHistory: number[] = [];
  let canProgress = false;

  let test1ValidPercent = 0;
  let test2ValidPercent = 0;
  let test3ValidPercent = 0;
  let test4ValidPercent = 0;

  let index = 0;

  let test1Data;
  let test2Data;
  let test3Data;
  let test4Data;

  let testSectionData = [test1Data, test2Data, test3Data, test4Data];

  let testSections = ["school", "schedule", "personal", "agree"];

  let testSectionValidity = [
    test1ValidPercent,
    test2ValidPercent,
    test3ValidPercent,
    test4ValidPercent,
  ];

  let progressData: {
    current: number;
    latest: number;
    latestStatus: string;
    barwidth: number;
  };

  function handlePrevious() {
    if (index >= 0) {
      index--;

      animateScroll.scrollTo({
        element: "#formtop",
        duration: 400,
        offset: -80,
      });
    }
  }

  function handleNext() {
    if (index <= testSectionData.length - 1) {
      index++;

      animateScroll.scrollTo({
        element: "#formtop",
        duration: 400,
        offset: -80,
      });
    }
  }

  function handleLatest(indexArray: number[]) {
    console.log("indexarray", indexArray);
    let largest = 0;
    if (indexArray.length > 0) {
      indexArray.forEach((number) => {
        if (number > largest) {
          largest = number;
        }
      });
      return largest;
    } else {
      return 0;
    }
  }

  function handleProgressBarWidth(validityData: number[]) {
    const segmentWidth = (1 / (validityData.length - 1)) * 100;
    let totalWidth = 0;

    validityData.forEach((percentage, i) => {
      if (i < validityData.length - 1) {
        totalWidth += (percentage / 100) * segmentWidth;
      }
    });

    return totalWidth;
  }

  function detectReady(sectionValidity: number) {
    if (sectionValidity === 100) {
      return "ready";
    } else {
      return "incomplete";
    }
  }

  function canMove(validity: number[], index: number) {
    if (validity[index] !== 100) {
      return false;
    } else if (index === validity.length - 1) {
      console.log("max");
      return false;
    } else {
      return true;
    }
  }

  $: indexHistory = [...indexHistory, index];
  $: latest = handleLatest(indexHistory);
  $: progressData = {
    current: index,
    latest: latest,
    latestStatus: detectReady(testSectionValidity[latest]),
    barwidth: handleProgressBarWidth(testSectionValidity),
  };

  $: canProgress = canMove(testSectionValidity, index);
</script>

<form
  class="flex flex-col mx-auto grow-0 grid grid-col-1 grid-row-1 items-center relative gap-0 mt-[50px]"
>
  {#if index > 0}
    <div
      transition:fly
      class="py-2 bg-rose-800 text-white text-xl sm:text-2xl md:text-3xl font-bold mb-[40px] rounded-md"
    >
      <h1>{"キャンパス: " + $campus}</h1>
      <h1 class="my-3">{"受講スタイル: " + $course}</h1>
      <h1>{"受講レベル: " + $level}</h1>
    </div>
  {/if}

  <div id="formtop" class="mx-5 sm:mx-0 mb-[30px]">
    <ProgressBar progress={progressData} />
  </div>
  <div>
    {#each [testSections[index]] as section (index)}
      {#if section === "school"}
        <SchoolSubform
          bind:percentValid={testSectionValidity[index]}
          bind:selfHeight={currentHeight}
          bind:data={testSectionData[index]}
          id={"school"}
        />
      {:else if section === "schedule"}
        <ScheduleSubform
          bind:percentValid={testSectionValidity[index]}
          bind:selfHeight={currentHeight}
          bind:data={testSectionData[index]}
          id={"schedule"}
        />
      {:else if section === "personal"}
        <PersonalSubform
          bind:percentValid={testSectionValidity[index]}
          bind:selfHeight={currentHeight}
          bind:data={testSectionData[index]}
          id={"personal"}
        />
      {:else if section === "agree"}
        <AgreeSubform
          bind:percentValid={testSectionValidity[index]}
          bind:selfHeight={currentHeight}
          bind:data={testSectionData[index]}
          id={"agree"}
        />
      {:else}
        <p class="text-red-500 text-xl">
          エラーが発生しました。ページをリロードしてください。
        </p>
      {/if}
    {/each}
  </div>

  <div class="flex w-full place-content-around my-[30px]">
    <button
      on:click|preventDefault={handlePrevious}
      class="disabled:bg-slate-500 disabled:text-white: transition-all ease-in bg-sky-800 text-white rounded-md hover:bg-sky-600 p-2 text-xl shadow-md"
      disabled={index === 0}>前へ</button
    >

    <button
      on:click|preventDefault={handleNext}
      class="disabled:bg-slate-500 disabled:text-white: transition-all ease-in bg-sky-800 text-white rounded-md hover:bg-sky-600 p-2 text-xl shadow-md"
      disabled={!canProgress}>次へ</button
    >
  </div>
</form>
