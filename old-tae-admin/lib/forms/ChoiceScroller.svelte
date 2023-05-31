<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import { fly } from "svelte/transition";
  import type { ImageArray } from "$lib/forms/ApplicationData";

  export let selection: string;
  export let images: ImageArray;

  let index = 0;
  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  function handleIndex(currentSelection: string) {
    if (currentSelection) {
      images.forEach((image) => {
        if (image.name === currentSelection) {
          index = images.indexOf(image);
        }
      });
    }
    if (!currentSelection) {
      index = 0;
    }
  }

  $: handleIndex(selection);
  $: console.log(s3 + images[0].img);
</script>

<div class="grid grid-rows-1 grid-cols-1 relative">
  {#each [images[index]] as src (index)}
    <img
      transition:fly
      src={s3 + src.img}
      alt=""
      class="w-auto col-span-full row-span-full"
    />
    {#if src.text}
      <div
        transition:fly
        class="flex h-[30px] absolute inset-x-0 bottom-0 w-full z-30"
      >
        <div
          class="pl-4 bg-rose-800 h-full opacity-100 color-white text-center text-white font-bold text-lg sm:text-2xl w-1/4"
        >
          <p>{src.text}</p>
        </div>
        <div
          class="bg-gradient-to-r from-rose-800 to-transparent h-full w-full"
        />
      </div>
    {/if}
  {/each}
</div>
