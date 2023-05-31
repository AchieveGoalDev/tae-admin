<script lang="ts">
  import { slide } from "svelte/transition";
  import type { RadioInput } from "$lib/forms/ApplicationData";
  import { onMount } from "svelte";

  export let data: RadioInput;

  export let isValid: boolean;
  export let value: string;

  let errorMessage: string[] = [];

  onMount(() => {
    checkValidity(value);
  });

  function checkValidity(value: string) {
    if (!value) {
      isValid = false;
    } else {
      isValid = true;
    }
  }

  $: if (!isValid) {
    errorMessage.push("必要項目です");
  } else {
    errorMessage = [];
  }

  $: checkValidity(value);
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <legend class="col-span-3 font-bold text-right pr-4 w-full h-full border-r">
    {#if data.isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}</legend
  >
  <div class="w-full pl-5 col-span-8 flex flex-col">
    <fieldset class="flex flex-col sm:flex-row my-2 place-content-around mb-2">
      {#each data.choices as choice}
        <div class="flex flex-row my-1 sm:my-0">
          <label class="mr-1" for={choice}>{choice}</label>
          <input
            bind:group={value}
            value={choice}
            id={choice}
            type="radio"
            name={data.label}
          />
        </div>
      {/each}
    </fieldset>
    {#if !isValid}
      {#each errorMessage as error}
        <p transition:slide class="text-red-500">{error}</p>
      {/each}
    {/if}
  </div>
</div>
