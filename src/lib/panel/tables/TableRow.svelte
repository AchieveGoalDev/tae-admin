<script lang="ts">
  import { slide } from "svelte/transition";
  let cells = ["stuff", "stuff", "stuff", "stuff"];
</script>

<div
  class="grid bg-secondary-ultralight my-2 p-2 text-md bg-opacity-20"
  style:grid-template-columns={`repeat(${cells.length}, 1fr)`}
>
  {#each cells as cell}
    <p transition:slide class="grid col-span-1 mx-auto">{cell}</p>
  {/each}
</div>
