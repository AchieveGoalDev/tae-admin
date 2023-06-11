<script lang="ts">
  import { fly } from "svelte/transition";
  import "iconify-icon";
  import SideNavButton from "$lib/navigation/SideNavButton.svelte";
  import { sideNavButtons } from "$lib/navigation/ButtonDefinitions";

  import { interfaceState } from "$lib/stores/interface";
</script>

<div
  transition:fly|local={{ x: -250, duration: 350 }}
  class="flex flex-col h-full text-neutral-light"
>
  <div
    class="
    h-1/3 
    bg-primary-ultradark 
    transition:all 
    dark:bg-dark-ultralight 
    rounded-br-lg 
    shadow-md 
    flex 
    flex-col 
    items-center 
    justify-center 
    place-content-between
    "
  >
    <div
      class="
      h-1/3 
      pt-[2rem] 
      self-start 
      justify-self-start 
      pl-[2rem]
      "
    >
      <button
        class="
          justify-self-start
          text-xl
          transition-all
          hover:scale-1.2
          hover:-translate-x-1
          "
        on:click={() => ($interfaceState.showNav = false)}
      >
        <iconify-icon icon="bxs:left-arrow" />
      </button>
    </div>
    <div
      class="w-full h-1/2 flex flex-col items-center text-lg place-space-around"
    >
      <h5 class="font-bold mb-[1rem]">Toyo Acheive English</h5>
      <!-- <div
        class="rounded-full h-auto outline outline-solid outline-black outline-2 my-2"
      >
        LOGO
      </div> -->
      <h5 class="">管理ダッシュボード</h5>
    </div>
  </div>
  <nav class="h-1/3 flex flex-col justify-around my-[.5rem] font-bold">
    {#each sideNavButtons as button}
      <SideNavButton props={button} />
    {/each}
  </nav>
  <div
    class="h-1/3 bg-primary-ultradark rounded-tr-lg shadow-md dark:bg-dark-ultralight transition-all"
  />
</div>
