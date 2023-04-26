<script lang="ts">
  import { fade } from "svelte/transition";
  export let isSelected: boolean;
  export let content: string;
</script>

<div>
  {#if isSelected}
    <div
      transition:fade
      class="
			p-2
			bg-primary-medium
			text-white
			font-normal
			rounded-lg
			hover:cursor-pointer 
			select-none
			"
    >
      {content}
    </div>
  {:else}
    <div
      transition:fade
      class="
				text-stone-600
				hover:text-black
				p-2
				border-solid 
				border-primary-dark 
				border-2
				rounded-lg 
				select-none 
				transition-all 
				transition 
				hover:cursor-pointer 
				hover:bg-primary-ultralight"
    >
      {content}
    </div>
  {/if}
</div>
