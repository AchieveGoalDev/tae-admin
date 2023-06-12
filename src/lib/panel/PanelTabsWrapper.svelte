<script lang="ts">
  import { tabIndex } from "$lib/panel/TabDefs";
  import PanelTab from "$lib/panel/PanelTab.svelte";

  import { interfaceState } from "$lib/stores/interface";

  let tabList = tabIndex.event;

  const updateTabs = (state: string) => {
    if (state === "event") {
      tabList = tabIndex.event;
    } else {
      tabList = tabIndex.uc;
    }
  };

  $: updateTabs($interfaceState.page);
</script>

<nav class="flex text-neutral-ultralight">
  <ul class="flex">
    {#each tabList as tab}
      <PanelTab props={tab} />
    {/each}
  </ul>
</nav>
