<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import PanelFilter from "$lib/admin/panels/PanelFilter.svelte";
  import type { Tab, Panel } from "$lib/admin/panels/panelDefs.svelte";
  import { fade } from "svelte/transition";

  export let data: Panel;

  let filterData: any;
  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  let activeTab = data.defaultTab;

  function handleTab(tab: Tab) {
    activeTab = tab.id;
  }

  function handleActive(tab: Tab) {
    console.log(activeTab === tab.id);
    if (activeTab === tab.id) {
      return "h-full transition all bg-primary-light scale-110 pointer-cursor mr-2 p-2";
    } else {
      return "h-full bg-primary-medium transition-all hover:bg-primary-light hover:scale-110 pointer-cursor mr-2 p-2";
    }
  }
</script>

<section class="w-2/3 mx-auto">
  <ul class="flex flex-row place-content-between">
    <div class="flex flex-row">
      {#each data.tabs as tab}
        <li>
          {#if activeTab === tab.id}
            <button
              class={"h-full transition all bg-primary-light scale-110 pointer-cursor mr-2 p-2"}
              on:click|preventDefault={() => handleTab(tab)}
            >
              <img
                class="h-[30px] w-[30px]"
                src={s3 + "images/Icons/" + tab.icon}
                alt={tab.iconAlt}
              />
            </button>
          {:else}
            <button
              class={"h-full bg-primary-medium transition-all hover:bg-primary-light hover:scale-110 pointer-cursor mr-2 p-2"}
              on:click|preventDefault={() => handleTab(tab)}
            >
              <img
                class="h-[30px] w-[30px]"
                src={s3 + "images/Icons/" + tab.icon}
                alt={tab.iconAlt}
              />
            </button>
          {/if}
        </li>
      {/each}
    </div>
    <li>
      <PanelFilter {filterData} />
    </li>
  </ul>
  <div class="shadow-lg h-[400px] bg-slate-50 grid grid-cols-1 grid-rows-1">
    {#each data.tabs as tab}
      {#if activeTab === tab.id}
        <div
          in:fade={{ delay: 250, duration: 250 }}
          out:fade={{ duration: 250 }}
          class="col-span-full row-span-full"
        >
          <svelte:component this={tab.component}>
            {tab.id}
          </svelte:component>
        </div>
      {/if}
    {/each}
  </div>
</section>
