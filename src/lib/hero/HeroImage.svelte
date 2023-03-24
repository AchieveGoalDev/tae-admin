<script lang="ts">
  import type { CarouselImage } from "$lib/hero/HeroDefs";
  import { fly } from "svelte/transition";

  export let imageProps: CarouselImage;
</script>

<img
  class={"mx-auto h-full w-auto col-span-full row-span-full max-h-[300px] sm:max-h-[350px] md:max-h-[350px] lg:max-h-[450px] xl:max-h-[550px]"}
  src={imageProps.url}
  alt={imageProps.alt}
  in:fly={imageProps.transitionIn}
  out:fly={imageProps.transitionOut}
/>
