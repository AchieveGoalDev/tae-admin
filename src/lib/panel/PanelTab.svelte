<script lang="ts">
    import type { TabDef } from "$lib/panel/TabDefs";
    import { page } from "$app/stores";

    import "iconify-icon";

    export let props: TabDef;
    let isCurrent: boolean;

    console.log($page);

    $: if ($page.url.pathname === "/event") {
        isCurrent = true;
    }
</script>

{#if !isCurrent}
    <li
        class="
        bg-primary-ultradark p-[.5rem]
        flex
        items-center
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
        <iconify-icon icon={props.icon} class="mr-2" />
        <h4 class="text-md font^bold">{props.text}</h4>
    </li>
{/if}
