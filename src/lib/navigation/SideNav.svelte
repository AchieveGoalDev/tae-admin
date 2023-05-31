<script lang="ts">
    import SideNavButton from "$lib/navigation/SideNavButton.svelte";
    import { sideNavButtons } from "$lib/navigation/ButtonDefinitions";
</script>

<div class="flex flex-col h-full">
    <div class="h-1/3 bg-primary-ultralight rounded-br-lg shadow-md" />
    <div class="h-1/3 flex flex-col justify-around my-[.5rem]">
        {#each sideNavButtons as button}
            <SideNavButton isPage={false} props={button} />
        {/each}
    </div>
    <div class="h-1/3 bg-primary-ultralight rounded-tr-lg shadow-md" />
</div>
