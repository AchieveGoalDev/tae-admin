<script lang="ts">
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";

  export let description: string;

  let isHovered = false;

  let flyParams = {y:10,duration:500};
  //    fadeParams = "{{duration:500}}"
</script>

<div
  class="flex flex-col relative hover:bg-amber-50 float-right mx-auto"
  on:mouseenter={() => {
    isHovered = true;
  }}
  on:mouseleave={() => {
    isHovered = false;
  }}
>
  <slot name="media" />
  {#if isHovered}
    <p
      in:fly={flyParams}
      class="absolute bottom-2 left-2 text-lg font-bold bg-white rounded-full p-1 opacity-90"
    >
      {description}
    </p>
  {/if}
</div>
