<script lang="ts">
    import { fly } from "svelte/transition";
    import SideNavButton from "$lib/navigation/SideNavButton.svelte";
    import { sideNavButtons } from "$lib/navigation/ButtonDefinitions";
</script>

<div
    transition:fly|local={{ x: -250, duration: 350 }}
    class="flex flex-col h-full"
>
    <div
        class="h-1/3 bg-primary-ultralight rounded-br-lg shadow-md flex flex-col items-center justify-center font-bold"
    >
        <h5 class="">Toyo Acheive English</h5>
        <div
            class="rounded-full h-auto outline outline-solid outline-black outline-2 my-2"
        >
            LOGO
        </div>
        <h5 class="">管理ダッダッシュボード</h5>
    </div>
    <nav class="h-1/3 flex flex-col justify-around my-[.5rem]">
        {#each sideNavButtons as button}
            <SideNavButton isPage={false} props={button} />
        {/each}
    </nav>
    <div class="h-1/3 bg-primary-ultralight rounded-tr-lg shadow-md" />
</div>
