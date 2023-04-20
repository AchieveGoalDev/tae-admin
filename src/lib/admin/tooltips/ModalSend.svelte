<script lang="ts">
  import { fade } from "svelte/transition";
  export let errorlist: string[];
</script>

<div
  transition:fade
  class="bg-slate-800 text-white absolute z-50 text-sm rounded-md p-2 translate-x-80 lg:translate-x-64 xl:translate-x-64 -translate-y-6 shadow-md"
>
  {#each errorlist as error}
    <p>{`${error}にはエラーがあります`}</p>
  {/each}
</div>

