<script lang="ts">
  //@ts-nocheck
  import { interfaceState } from "$lib/stores/interface";

  import Gakugaiadmin from "$lib/panel/events/Gakugaiadmin.svelte";
  import Gakunaiadmin from "$lib/panel/events/Gakunaiadmin.svelte";
  import Gakugaimk from "$lib/panel/events/Gakugaimk.svelte";
  import Gakunaimk from "$lib/panel/events/Gakunaimk.svelte";

  const panels = {
    学内管理: Gakunaiadmin,
    学外管理: Gakugaiadmin,
    学内申込: Gakunaimk,
    学外申込: Gakugaimk,
  };
</script>

<main
  class="w-full h-full bg-neutral-light dark:bg-dark-ultradark dark:text-neutral-light"
>
  {#if $interfaceState.tab.event === "default"}
    <svelte:component this={panels.学内管理} />
  {:else}
    <svelte:component this={panels[$interfaceState.tab.event]} />
  {/if}
</main>
