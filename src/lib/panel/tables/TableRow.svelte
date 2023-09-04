<script lang="ts">
  import { slide } from "svelte/transition";

  export let length: number;
  export let index: number;

  let evenRow = `
      grid 
      p-2 
      bg-primary-ultralight 
      text-md 
      bg-opacity-20
    `;

  let oddRow = `
      grid 
      p-2 
      text-md 
    `;

  function calculateClass(index: number) {
    if (index % 2 === 0) {
      return evenRow;
    } else {
      return oddRow;
    }
  }
</script>

<div
  style:grid-template-columns={`repeat(${length}, 1fr)`}
  class={calculateClass(index)}
  transition:slide|local
>
  <slot />
</div>
