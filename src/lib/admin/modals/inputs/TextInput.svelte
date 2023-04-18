<script lang="ts">
  import type { Personal } from "$lib/admin/data/application";
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import { slide } from "svelte/transition";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let label: string;
  export let key: string;
  export let size: string | null;
  export let data: Personal;

  let wasFocused = false;
  let displayError = false;

  function handleUpdate(key: string, e: Event) {
    const target = e.target as HTMLInputElement;
    //@ts-ignore
    data[key] = target.value;

    data.validateData();
  }

  function handleSize(size: string | null) {
    switch (size) {
      case "sm":
        return "4em";
      case "med":
        return "8em";
      case "lg":
        return "12em";
      default:
        return "8em";
    }
  }

  $: if (wasFocused) {
    data.validateData();
    displayError = true;
    wasFocused = false;
  }

  $: console.log(wasFocused, key);
</script>

<label class="font-bold self-center justify-self-end me-2" for={label}>
  <span>{label}:</span>
</label>
<div class="col-span-3 flex-col">
  <span class="flex">
    <input
      style:width={handleSize(size)}
      class="
			ml-2
			p-1 
			me-3 
			self-center 
			justify-self-start 
			shadow-md 
			transition 
			transition 
			transitions-all 
			focus:bg-primary-ultralight
			border-solid
			border-primary-medium
			focus:border-l-4
			"
      on:focus={() => (wasFocused = true)}
      on:input={(e) => handleUpdate(key, e)}
      name={label}
      value={data[key]}
    />
    {#if wasFocused}
      {#if data.errors[key].length > 0}
        <img src={s3 + "images/Icons/errorThick.svg"} class="ms-2 w-[20px]" />
      {/if}
    {/if}
  </span>
  <div
    class="flex flex-col justify-start items-start bg-red-50 max-w-[10em] mt-2"
  >
    {#if displayError}
      {#each data.errors[key] as error}
        <p transition:slide class="text-xs m-2 text-red-600 text-left">
          {error}
        </p>
      {/each}
    {/if}
  </div>
</div>
