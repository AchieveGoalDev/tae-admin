<script lang="ts">
  import HighlightTitle from "$lib/headers/HighlightTitle.svelte";
  import { special } from "$lib/faq/FaqDefs";

  import CollectionLink from "$lib/faq/CollectionLink.svelte";
  import LinkList from "$lib/faq/LinkList.svelte";
  import ToTop from "$lib/buttons/ToTop.svelte";

  $: console.log(special);
</script>

<div
  class="sm:w-[600px] md:w-[700px] lg:w-[1000px] lg:max-w-[1000px] sm:max-w-[600px] md:max-w-[700px] max-w-[325px] pt-10 mx-auto"
>
  <div class="w-full">
    <HighlightTitle
      pretext="よくある"
      highlight="質問"
      posttext=""
      themeColor="blue"
    />
    <LinkList collections={special} color="blue" />
    {#each special as specialCollection}
      <CollectionLink collection={specialCollection} color="blue" />
    {/each}
  </div>
</div>
<ToTop />
