<script lang="ts">
  import { slide } from "svelte/transition";

  export let data: string[];
  export let level: string;
  export let isValid: boolean;

  $: if (level) {
    isValid = true;
  } else {
    isValid = false;
  }
</script>

{#if data}
  <select transition:slide bind:value={level} class="inline">
    <option value="">--レベルを選択--</option>
    {#each data as level}
      <option value={level}>{level}</option>
    {/each}
  </select>
{/if}
