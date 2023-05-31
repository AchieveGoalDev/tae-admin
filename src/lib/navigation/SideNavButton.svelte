<script lang="ts">
    import type { SideNavButtonProps } from "$lib/navigation/ButtonDefinitions";

    export let isPage: boolean;
    export let props: SideNavButtonProps;
</script>

{#if !isPage}
    <div
        class="
            h-[3rem]
            bg-primary-ultralight
            -translate-x-[1rem]
            hover:translate-x-0
            transition-all
            ease-in-out
            hover:cursor-pointer
            hover:bg-primary-light
            rounded-r-lg
            shadow-md
            items-center
        "
    >
        <div class="flex my-auto">
            <div class="ml-[2rem]">IMG</div>
            <div class="ml-[3rem]">{props.text}</div>
        </div>
    </div>
{:else}
    <div
        class="
            h-[3rem]
            bg-primary-dark
            rounded-r-lg
            shadow-md
            text-white
        "
    >
        <div class="flex">
            <div class="ml-[2rem]">IMG</div>
            <div class="ml-[3rem]">I am link</div>
        </div>
    </div>
{/if}
