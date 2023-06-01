<script lang="ts">
    import "../../../app.css";

    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    import SideNav from "$lib/navigation/SideNav.svelte";
    import Header from "$lib/header/Header.svelte";

    //TODO Add side nav drawer
    let sideNavIsOpen: boolean = true;
    let loaded = false;
    let logged = true;
    let flyDuration = 500;

    onMount(() => (loaded = true));

    $: if (!logged) {
        goto("/", { replaceState: true });
    }
    //TODO make sidenav tray component
    //TODO make a more fluid transition to tray by manipulating grid stuff
</script>

{#if loaded}
    <div
        class="grid gap-x-1 gap-y-0 grid-cols-[repeat(24, 1fr)] h-[100vh] bg-slate-100"
    >
        <aside
            in:fly={{ x: -100, duration: flyDuration - 150 }}
            class="
    col-[1_/_span_1]
    h-full
    "
        >
            {#if sideNavIsOpen}
                <SideNav />
            {:else}
                <div
                    in:fly={{
                        x: -25,
                        duration: flyDuration - 150,
                        delay: 250,
                    }}
                    out:fly={{ x: -100, duration: flyDuration - 150 }}
                    class="w-[3rem] h-full bg-primary-ultralight"
                >
                    <button on:click={() => (sideNavIsOpen = true)}>SHP</button>
                </div>
            {/if}
        </aside>

        <div class="col-[2_/_span_23] h-full pt-[1rem] pb-[2rem]">
            <div
                class="grid grid-cols-12 mx-[2rem] grid-rows-[repeat(24,.3fr)] h-full"
            >
                <div
                    in:fly={{ y: -50, duration: flyDuration }}
                    class="flex flex-col col-span-12 row-[span_1]"
                >
                    <Header bind:logged />
                </div>
                <div
                    in:fly={{ y: 200, duration: flyDuration + 150 }}
                    class="col-span-12 row-[span_23]"
                >
                    <div
                        class="h-full grid grid-rows-[repeat(24, 1fr)] grid-cols-12"
                    >
                        <div
                            class="row-[span_1] col-span-full flex flex-col-reverse"
                        >
                            <div class="flex">
                                <div
                                    class="bg-primary-ultralight p-[.5rem] mr-[.5rem]"
                                >
                                    Tab1
                                </div>

                                <div
                                    class="bg-primary-light p-[.5rem] mr-[.5rem] shadow-inner"
                                >
                                    Tab2
                                </div>

                                <div
                                    class="bg-primary-light p-[.5rem] mr-[.5rem] shadow-inner"
                                >
                                    Tab3
                                </div>
                            </div>
                        </div>
                        <div
                            class="row-[span_23] col-span-full bg-primary-ultralight"
                        >
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
