<script lang="ts">
  import { page } from "$app/stores";

  import type { SideNavButtonProps } from "$lib/navigation/ButtonDefinitions";
  import NavigationIcon from "$lib/icons/NavigationIcon.svelte";

  import { goto } from "$app/navigation";

  export let props: SideNavButtonProps;

  const focusNavigate = (icon: SideNavButtonProps) => {
    goto("/admin" + icon.link, { replaceState: false });
  };

  console.log(`/admin${props.link}` === $page.url.pathname);
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
            translate-x-0
            transition-all
            ease-in-out
            dark:bg-dark-ultralight
            dark:hover:bg-secondary-dark 
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
            active:text-dark-ultra
        "
  >
    <div class="flex select-none">
      <NavigationIcon icon={props.icon} />
      <div class="ml-[3rem] ">{props.text}</div>
    </div>
  </button>
{/if}
