<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import SelectInput from "$lib/forms/input/SelectInput.svelte";

  import {
    campuses,
    levelSelector,
    courseSelector,
    mtmSelector,
  } from "$lib/forms/subforms/SchoolSubformData";

  type Nullable<T> = T | undefined;
  type TestSectionData = {
    select1: string;
    select2: string;
    select3: string;
  };

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let previousData: Nullable<TestSectionData>;
  export let data: Nullable<TestSectionData>;
  data = {
    select1: "",
    select2: "",
    select3: "",
  };

  onMount(() => {
    if (previousData) {
      data = previousData;
    }
  });

  let testOneIsValid = false;
  let testTwoIsValid = false;
  let testThreeIsValid = false;

  const testSelector1 = {
    placeholder: `--${id}--1`,
    options: ["Option1", "Option2", "Option3"],
  };

  const testSelector2 = {
    placeholder: `--${id}--2`,
    options: ["Option1", "Option2", "Option3"],
  };

  const testSelector3 = {
    placeholder: `--${id}--3`,
    options: ["Option1", "Option2", "Option3"],
  };

  const forced = "";
  const forcedMessage = "";

  function calculatePercentValid(inputsAreValid: boolean[]) {
    let validCount = 0;
    inputsAreValid.forEach((inputIsValid) => {
      if (inputIsValid) {
        validCount++;
      }
    });

    if (validCount) {
      console.log(validCount);
      return (validCount / inputsAreValid.length) * 100;
    } else {
      console.log(validCount);
      return 0;
    }
  }

  $: inputsValid = [testOneIsValid, testTwoIsValid, testThreeIsValid];

  $: percentValid = calculatePercentValid(inputsValid);
</script>

<div
  bind:clientHeight={selfHeight}
  in:fly={{ x: 200, opacity: 0 }}
  out:fly={{ x: -200, opacity: 0 }}
  class="my-20 bg-white shadow-md px-5 absolute top-0 inset-x-0"
>
  <SelectInput
    bind:value={data.select1}
    data={testSelector1}
    bind:isValid={testOneIsValid}
    {forced}
    {forcedMessage}
  />
  <SelectInput
    bind:value={data.select2}
    bind:isValid={testTwoIsValid}
    data={testSelector2}
    {forced}
    {forcedMessage}
  />
  <SelectInput
    bind:value={data.select3}
    bind:isValid={testThreeIsValid}
    data={testSelector3}
    {forced}
    {forcedMessage}
  />
</div>
