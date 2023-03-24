<script lang="ts">
  import HighlightTitle from "$lib/headers/HighlightTitle.svelte";
  import { collections } from "$lib/faq/FaqDefs";

  import CollectionLink from "$lib/faq/CollectionLink.svelte";
  import LinkList from "$lib/faq/LinkList.svelte";
  import ToTop from "$lib/buttons/ToTop.svelte";
</script>

<div
  class="sm:w-[600px] md:w-[700px] lg:w-[1000px] lg:max-w-[1000px] sm:max-w-[600px] md:max-w-[700px] max-w-[325px] pt-10 mx-auto"
>
  <div class="w-full">
    <HighlightTitle
      pretext="よくある"
      highlight="質問"
      posttext=""
      themeColor="red"
    />
    <LinkList {collections} color="red" />
    {#each collections as collection}
      <CollectionLink color="red" {collection} />
    {/each}
  </div>
</div>
<ToTop />
