<script lang="ts">
  import { fly } from "svelte/transition";
  import SideNavButton from "$lib/navigation/SideNavButton.svelte";
  import { sideNavButtons } from "$lib/navigation/ButtonDefinitions";

  import { interfaceState } from "$lib/stores/interface";
</script>

<div
  transition:fly|local={{ x: -250, duration: 350 }}
  class="flex flex-col h-full text-neutral-light"
>
  <div
    class="h-1/3 bg-primary-ultradark transition:all dark:bg-dark-ultralight rounded-br-lg shadow-md flex flex-col items-center justify-center font-bold"
  >
    <button on:click={() => ($interfaceState.showNav = false)}>Hide</button>
    <h5 class="">Toyo Acheive English</h5>
    <div
      class="rounded-full h-auto outline outline-solid outline-black outline-2 my-2"
    >
      LOGO
    </div>
    <h5 class="">管理ダッシュボード</h5>
  </div>
  <nav class="h-1/3 flex flex-col justify-around my-[.5rem]">
    {#each sideNavButtons as button, i}
      {#if i === 3}
        <SideNavButton isPage={true} props={button} />
      {:else}
        <SideNavButton isPage={false} props={button} />
      {/if}
    {/each}
  </nav>
  <div
    class="h-1/3 bg-primary-ultradark rounded-tr-lg shadow-md dark:bg-dark-ultralight transition-all"
  />
</div>
