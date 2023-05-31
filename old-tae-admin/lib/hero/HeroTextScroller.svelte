<script lang="ts">
  import { fly } from "svelte/transition";
  export let display: boolean;
</script>

<div class="grid grid-cols-1 grid-rows-1">
  {#if display}
    <div transition:fly|local class="col-span-1 row-span-1">
      <div class="flex flex-col place-content-center">
        <slot />
      </div>
    </div>
  {/if}
</div>
