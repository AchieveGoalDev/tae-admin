<script lang="ts">
  import { fly } from "svelte/transition";

  export let scrollWords: string[];
  export let cycleIndex: number;
</script>

<h2
  style:grid-row={"about1"}
  class={`
            col-span-full
            row-span-full
            whitespace-nowrap
            thin-heading-outline-white 
            lg:heading-outline-white
            text-3xl
            lg:text-6xl
            xl:text-7xl
            font-black 
            mx-auto 
            text-rose-700 
            mb-3
            lg:mb-10 
            drop-shadow-xl 
            bg-sky-300
            lg:bg-sky-400/[.4] 
            p-4
            rounded-full
            `}
  transition:fly={{ y: 75, duration: 750 }}
>
  {scrollWords[cycleIndex]}
</h2>
