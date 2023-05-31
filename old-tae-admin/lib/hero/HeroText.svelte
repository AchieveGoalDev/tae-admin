<script lang="ts">
  import { fly } from "svelte/transition";

  export let scrollText: string[];
  export let cycleIndex: number;
</script>

<p
  transition:fly
  class="
    col-span-full 
    row-span-full 
    rounded-md 
    text-slate-700 
    text-lg 
    md:text-xl 
    lg:text-2xl 
    inline-block 
    font-bold
    md:font-normal
    mx-auto
    mb-0 
    lg:mb-10 
    w-2/3
    min-w-0 
    lg:min-w-[200px]"
>
  {scrollText[cycleIndex]}
</p>
