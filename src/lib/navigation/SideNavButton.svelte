<script lang="ts">
  import { page } from "$app/stores";
  import { interfaceState } from "$lib/stores/interface";

  import type { SideNavButtonProps } from "$lib/navigation/ButtonDefinitions";
  import NavigationIcon from "$lib/icons/NavigationIcon.svelte";

  import { goto } from "$app/navigation";

  export let props: SideNavButtonProps;

  let update = false;

  const focusNavigate = (props: SideNavButtonProps) => {
    $interfaceState.page = props.link.slice(1);
  };

  $: goto("/admin/" + $interfaceState.page, { replaceState: false });
</script>

{#if $page.url.pathname === `/admin${props.link}`}
  <div
    class="
            flex
            font-bold
            h-[2.5rem]
            xl:h-[2.8em]
            bg-primary-light
            -translate-x-[1rem]
            transition-all
            ease-in-out
            dark:bg-neutral-medium 
            rounded-r-lg
            shadow-lg
            items-center
            text-dark-ultralight
        "
  >
    <div class="flex select-none">
      <NavigationIcon icon={props.icon} />
      <div class="ml-[3rem] ">{props.text}</div>
    </div>
  </div>
{:else}
  <button
    on:click={() => focusNavigate(props)}
    class="
            flex
            font-bold
            h-[2.5rem]
            xl:h-[2.8em]
            bg-primary-ultradark
            -translate-x-[1rem]
            hover:translate-x-0
            transition-all
            ease-in-out
            hover:bg-secondary-dark
            dark:bg-dark-ultralight
            dark:hover:bg-secondary-dark
            focus:bg-primary-medium
            focus:translate-x-0    
            rounded-r-lg
            shadow-lg
            items-center
            active:bg-primary-light
            active:text-dark-dark
            dark:active:bg-neutral-dark
            dark:active:text-dark-dark
        "
  >
    <div class="flex select-none">
      <NavigationIcon icon={props.icon} />
      <div class="ml-[3rem] ">{props.text}</div>
    </div>
  </button>
{/if}
