<script lang="ts">
  import HighlightTitle from "$lib/headings/HighlightTitle.svelte";

  export let titleData: {
    pretext: string;
    highlight: string;
    posttext: string;
  };
</script>

<section
  class="flex flex-col my-5 sm:my-8 md:my-10 lg:my-13 xl:my-15 px-5 w-[50] md:w-[700px] lg:w-[1000px]  xl:w-[1200px] md:mx-auto"
>
  <div class="mb-5">
    <HighlightTitle pretext={titleData.pretext} posttext={titleData.posttext}>
      {titleData.highlight}
    </HighlightTitle>
  </div>
  <slot />
</section>
