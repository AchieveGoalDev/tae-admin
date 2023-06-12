<script lang="ts">
  import type { TabDef } from "$lib/panel/TabDefs";
  import { interfaceState } from "$lib/stores/interface";

  import { page } from "$app/stores";

  let currentPath: string;

  import "iconify-icon";

  export let props: TabDef;

  const setCurrentPath = (pathname: string) => {
    if (pathname === "/admin") {
      currentPath = "student";
    } else {
      currentPath = pathname.slice(7);
    }

    console.log(currentPath);
  };

  const updateTab = (currentPath: string, tag: string) => {
    //@ts-ignore
    $interfaceState.tab[currentPath] = tag;
  };

  const checkCurrentTab = (tag: string, isDefault: boolean) => {
    if (
      $interfaceState.tab[currentPath] === tag ||
      ($interfaceState.tab[currentPath] === "default" && isDefault)
    ) {
      return true;
    }
  };

  $: setCurrentPath($page.url.pathname);

  //TODO have tabbing tied only to styles and not make tabs rerender everytime a tab is changed
  //TODO have active property for bg color on tabs
  //TODO have tab button extend to full tab size
  //TODO tabs stack away on page switch
</script>

{#if !checkCurrentTab(props.tag, props.isDefault)}
  <li
    class="
        bg-primary-ultradark p-[.5rem]
        p-3
        mr-2
        text-lg
        font-bold
        hover:cursor-pointer
        select-none
        rounded-t-md
        dark:bg-dark-light
        transition-all
        hover:bg-secondary-dark
        active:bg-primary-dark
    "
  >
    <button
      on:click={() => {
        updateTab(currentPath, props.tag);
      }}
      class={"flex items-center"}
    >
      <iconify-icon icon={props.icon} class="mr-2" />
      <h4 class="text-md font^bold">{props.text}</h4>
    </button>
  </li>
{:else}
  <li
    class="
    flex
    items-center
    bg-primary-dark 
    p-[.5rem]
    p-3
    mr-2
    text-lg
    font-bold
    select-none
    rounded-t-md
    dark:bg-dark-ultralight
    transition-all
"
  >
    <iconify-icon icon={props.icon} class="mr-2" />
    <h4 class="text-md font^bold">{props.text}</h4>
  </li>
{/if}
