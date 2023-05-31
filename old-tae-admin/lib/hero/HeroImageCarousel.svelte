<script lang="ts">
  import { CarouselImage } from "$lib/hero/HeroDefs";
  import type { ImgObj } from "$lib/hero/HeroDefs";
  import PipBox from "$lib/hero/PipBox.svelte";
  import HeroImage from "$lib/hero/HeroImage.svelte";

  export let imgPaths: ImgObj[];
  export let cycleIndex: number;
  export let display: boolean;
  export let isMobile: boolean;

  let imgData: CarouselImage[] = [];

  $: for (let i = 0; i < imgPaths.length; i++) {
    imgData.push(
      new CarouselImage(imgPaths[i].path, imgPaths[i].alt, imgPaths[i].size)
    );
  }
</script>

<!--TODO simplify nesting here-->
<div class="grid grid-rows-12 place-content-between grid-cols-1">
  <div class="row-span-1" />
  <div
    class=" row-span-8 mx-auto flex flex-col place-content-around relative w-auto my-auto"
  >
    <div class="grid grid-cols-1 grid-rows-1 my-auto gap-0 lg:p-10">
      {#each imgData as img, i}
        {#if display && cycleIndex === i}
          <HeroImage imageProps={img} />
        {/if}
      {/each}
    </div>
    <div class="row-span-1" />
  </div>
  {#if !isMobile}
    <div class="row-span-2 col-span-1">
      <PipBox {imgPaths} index={cycleIndex} />
    </div>
  {/if}
</div>
