<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let url: string;

  $: url = url;
</script>

{#if url}
  {#key url}
    <div
      in:fly={{ x: -10, duration: 250, delay: 300, easing: cubicInOut }}
      out:fade={{ duration: 250, easing: cubicInOut }}
      class="w-full"
    >
      <slot />
    </div>
  {/key}
{/if}
