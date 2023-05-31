<script lang="ts">
  import ChoiceScroller from "$lib/forms/ChoiceScroller.svelte";

  import type { ImageSelectInput } from "$lib/forms/ApplicationData";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  export let value: string;
  export let isValid: boolean;
  export let data: ImageSelectInput;

  function handleChange(payload: string) {
    value = payload;
    dispatch("updateSelect", value);
  }

  $: if (!value) {
    isValid = false;
  } else {
    isValid = true;
  }

  $: value;
  $: console.log(value);
</script>

<div>
  <slot />
  <div
    class="flex mb-s2 justify-center items-center w-full place-content-between px-3"
  >
    <div class="mr-3" />
    <select
      on:change={() => handleChange(value)}
      bind:value
      class="w-[250px] sm:w-[300px] text-xl my-4 mx-auto shadow-md bg-sky-50 p-1"
    >
      <option value="">{data.placeholder}</option>
      {#each data.options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
  <ChoiceScroller selection={value} images={data.images} />
</div>
