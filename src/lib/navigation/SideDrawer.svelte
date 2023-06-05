<script lang="ts">
  import { fly } from "svelte/transition";
  import SideNavButton from "$lib/navigation/SideNavButton.svelte";
  import { sideNavButtons } from "$lib/navigation/ButtonDefinitions";

  import { interfaceState } from "$lib/stores/interface";

  import { cubicOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  const navPos = tweened(0, { duration: 150, easing: cubicOut });

  $: if ($interfaceState.showNav) {
    navPos.set(-100);
  } else if (!$interfaceState.showNav) {
    navPos.set(0);
  }

  $: console.log($interfaceState);
</script>

<div
  style:transform={`translateX(${$navPos}px)`}
  transition:fly|local={{ x: -250, duration: 350 }}
  class="flex flex-col h-full text-neutral-light"
>
  <div
    class="h-full w-[4rem] bg-primary-ultradark transition:all dark:bg-dark-ultralight shadow-md flex flex-col items-center justify-center font-bold"
  />
</div>
