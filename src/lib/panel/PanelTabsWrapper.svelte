<script lang="ts">
  import { tabIndex } from "$lib/panel/TabDefs";
  import PanelTab from "$lib/panel/PanelTab.svelte";

  import type { Page } from "@sveltejs/kit";
  import { page } from "$app/stores";

  // const selectPanel = (page: Page) => {
  //   switch (page.url.pathname) {
  //     case "/event":
  //       tabSet = tabIndex.event;
  //   }
  // };
</script>

<nav class="flex text-neutral-ultralight">
  <ul class="flex">
    {#each tabIndex.event as tab}
      <PanelTab props={tab} />
    {/each}
  </ul>
</nav>
