<script lang="ts">
  import { fly, slide } from "svelte/transition";
  import type { TestimonialProfile } from "$lib/testimonials/TestimonialData";

  export let data: TestimonialProfile;
</script>

<div
  transition:slide
  class="flex flex-col sm:flex-row items-center justify-items-center place-content-around py-2 px-[50px] sm:px-[20px]"
>
  <figure class="flex flex-col items-center">
    <figcaption class="text-2xl mb-[20px] sm:mb-0">
      <strong>{data.name}</strong>さん
    </figcaption>
    <img
      src={data.img}
      alt={data.imgAlt}
      class="h-[200px] p-2 bg-yellow-50 rounded-full shadow-md mb-[20px] sm:mb-0"
    />
    <strong class="text-xl sm:text-2xl"
      >TOEICスコア<span class="text-sky-800 text-2xl sm:text-3xl"
        >{data.scoreUp}</span
      >点アップ!</strong
    >
  </figure>
  <blockquote
    class="text-3xl sm:text-5xl text-rose-800 font-bold max-w-[100%] sm:max-w-[75%] my-5 sm:my-0"
  >
    {data.quote}
  </blockquote>
</div>
