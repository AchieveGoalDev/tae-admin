<script lang="ts">
  import "../../../app.css";

  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  //@ts-ignore
  import { goto } from "$app/navigation";

  import { interfaceState } from "$lib/stores/interface";
  import { meta, fetchSemesterMetadata } from "$lib/stores/dataContext";

  import SideNav from "$lib/navigation/SideNav.svelte";
  import Header from "$lib/header/Header.svelte";
  import PanelBody from "$lib/panel/PanelBody.svelte";
  import PageWrapper from "$lib/wrappers/PageWrapper.svelte";
  import ModalWrapper from "$lib/modals/ModalWrapper.svelte";

  export let data;

  let asyncMsg = "got nothing";

  let loaded = false;
  let logged = true;
  let pageTransitionSpeed = 300;
  let flyDuration = 500;

  onMount(async () => {
    console.log("Mounting layout");
    asyncMsg = "invoked async";
    //@ts-ignore
    $meta.semesters = await fetchSemesterMetadata();
    console.log("Await block over");

    loaded = true;
  });

  $: asyncMsg = asyncMsg;
  $: console.log(asyncMsg);
  $: console.log($meta);

  $: if (!logged) {
    goto("/", { replaceState: true });
  }

  //TODO Add side nav drawer
  //TODO make sidenav tray component
  //TODO make a more fluid transition to tray by manipulating grid stuff
</script>

{#if loaded}
  <ModalWrapper />
  {#key asyncMsg}
    <div>{asyncMsg}</div>
  {/key}
  <div
    class="grid gap-x-1 gap-y-0 grid-cols-[repeat(24, 1fr)] h-[100vh] bg-neutral-ultralight transition-all dark:bg-dark-ultradark"
  >
    <!--START SIDE NAV - LEFT HALF-->
    <aside
      in:fly={{ x: -100, duration: flyDuration - 150 }}
      class="
                col-[1_/_span_1]
                 h-full
             "
    >
      {#if $interfaceState.showNav}
        <SideNav />
      {:else}
        <div
          in:fly={{
            x: -25,
            duration: flyDuration - 150,
            delay: 250,
          }}
          out:fly={{ x: -100, duration: flyDuration - 150 }}
          class="w-[3rem] h-full bg-primary-dark transition-all dark:bg-dark-ultralight dark:text-neutral-light"
        >
          <button on:click={() => ($interfaceState.showNav = true)}>SHP</button>
        </div>
      {/if}
    </aside>
    <!--END SIDE NAV - LEFT HALF-->

    <!--START RIGHT HALF-->
    <div
      class="
            col-[2_/_span_23]
            grid
            grid-cols-12
            grid-rows-[repeat(24,.3fr)]
            h-full
            px-[2rem]
            pt-[1rem]
            pb-[2rem]
            overflow-hidden
            "
    >
      <!--START HEADER-->
      <div
        in:fly={{ y: -50, duration: flyDuration }}
        class="flex flex-col col-span-12 row-[span_1]"
      >
        <Header bind:logged />
      </div>
      <!-- END HEADER-->

      <!--START PANEL-->
      <div
        in:fly={{ y: 200, duration: flyDuration + 150 }}
        class="
                    h-full
                    col-span-12
                    row-[span_23]
                    grid
                    grid-rows-[repeat(24, 1fr)]
                    grid-cols-12
                    gap-0
                    "
      >
        <PanelBody>
          <div
            class="bg-neutral-dark dark:bg-dark-dark h-full w-full overflow-hidden"
          >
            {#key data.pathname}
              <div
                class="h-full w-full svelte-transition-container"
                in:fade={{
                  // x: -500,
                  delay: pageTransitionSpeed,
                  duration: pageTransitionSpeed,
                }}
                out:fly|local={{
                  // x: 500,
                  duration: pageTransitionSpeed,
                }}
              >
                <PageWrapper>
                  <slot />
                </PageWrapper>
              </div>
            {/key}
          </div>
        </PanelBody>
      </div>
      <!--END PANEL-->
    </div>
    <!--END RIGHT HALF-->
  </div>
{:else}
  <div>読み込み中</div>
{/if}
