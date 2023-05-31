<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import type { TextTab, SubPanel } from "$lib/admin/panels/panelDefs.svelte";
  import type { Student } from "$lib/admin/data/application";

  export let data: SubPanel;
  export let edit: boolean;
  export let studentData: Student;

  let activeTab = data.defaultTab;

  function handleTab(tab: TextTab) {
    activeTab = tab.id;
  }

  function handleEditOn() {
    if (!edit) {
      edit = true;
    }
  }

  function handleEditOff() {
    if (edit) {
      edit = false;
    }
  }
</script>

<ul class="flex flex-row place-content-between">
  <div class="flex flex-row">
    {#each data.tabs as tab}
      <li>
        {#if activeTab === tab.id}
          <button
            class={"h-full transition all bg-primary-light scale-110 pointer-cursor mr-2 p-2 text-white"}
            on:click|preventDefault={() => handleTab(tab)}
          >
            {tab.text}
          </button>
        {:else}
          <button
            class={"h-full bg-primary-medium transition-all hover:bg-primary-light hover:scale-110 pointer-cursor mr-2 p-2 text-white"}
            on:click|preventDefault={() => handleTab(tab)}
          >
            {tab.text}
          </button>
        {/if}
      </li>
    {/each}
    <button class="justify-self-end" on:click={handleEditOn}>
      データを変更
    </button>
  </div>
</ul>
<div class="grid grid-cols-1 grid-rows-1">
  {#each data.tabs as tab}
    {#if activeTab === tab.id}
      <div
        in:fade={{ delay: 250, duration: 250 }}
        out:fade={{ duration: 250 }}
        class="col-span-full row-span-full"
      >
        <svelte:component this={tab.component} {edit} data={studentData}>
          {tab.id}
        </svelte:component>
      </div>
    {/if}
  {/each}
</div>
{#if edit}
  <div transition:slide class="place-content-around flex w-full">
    <button on:click={handleEditOff} class="bg-red-700 text-white"
      >変更取消</button
    ><button>実行</button>
  </div>
{/if}
