<script lang="ts">
  import type { SideNavButtonProps } from "$lib/navigation/ButtonDefinitions";

  export let isPage: boolean;
  export let props: SideNavButtonProps;
</script>

{#if !isPage}
  <div
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
            hover:cursor-pointer
            hover:bg-secondary-dark
            dark:bg-dark-ultralight
            dark:hover:bg-secondary-dark
            rounded-r-lg
            shadow-lg
            items-center
        "
  >
    <div class="flex">
      <div class="ml-[2rem]">IMG</div>
      <div class="ml-[3rem]">{props.text}</div>
    </div>
  </div>
{:else}
  <div
    class="
            font-bold
            flex
            h-[2.8rem]
            bg-primary-medium
            dark:bg-neutral-dark
            rounded-r-lg
            shadow-xl
            text-neutral-ultralight
            dark:text-dark-dark
            items-center
        "
  >
    <div class="flex">
      <div class="ml-[2rem]">IMG</div>
      <div class="ml-[3rem]">{props.text}</div>
    </div>
  </div>
{/if}
