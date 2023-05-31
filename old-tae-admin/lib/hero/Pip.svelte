<script lang="ts">
  import { fade } from "svelte/transition";
  import type { ImgObj } from "$lib/hero/HeroDefs";

  export let img: ImgObj;
  export let index: number;
  export let imgPaths: any;

  let selected: boolean = false;

  $: selected = imgPaths[index].path === img.path;
</script>

<div
  class="border border-slate-400 border-[3px] p-[1px] h-[18px] w-[18px] opacity-60 hover:cursor-pointer"
>
  {#if selected}
    <div
      class="h-[100%] w-[100%] bg-rose-700"
      transition:fade={{ duration: 800 }}
    />
  {/if}
</div>
