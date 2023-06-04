<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";

    import PrimaryCtaGhost from "$lib/buttons/PrimaryCTAGhost.svelte";

    let loaded = false;

    //TODO placeholder login function/ Make real login functionality
    let logged = false;

    onMount(() => (loaded = true));

    $: if (logged) {
        goto("/admin", { replaceState: true });
    }
</script>

<div
    class="
    h-[100vh] 
    w-[100vw] 
    bg-gradient-to-br 
    from-primary-ultradark 
    to-primary-light 
    grid 
    grid-cols-1 
    grid-rows-1 
    justify-center 
    items-center
    "
>
    {#if loaded}
        <dialog
            in:fly={{ y: 50, duration: 1000 }}
            class="bg-gradient-to-b 
                    from-stone-50 to-stone-100 w-1/3 min-h-1/3 grid grid-rows-3 grid-cols-1 shadow-lg gap-[2rem]"
        >
            <h1 class="text-6xl mx-auto row-span-1 font-bold">404</h1>
            <div
                class="
                w-2/3
                row-span-1
                mx-auto
                text-xl
                text-slate-700
                flex
                flex-col
                text-center
                "
            >
                <p>申し訳ございません。</p>
                <p>指定されたページは存在していません。</p>
            </div>
            <div
                class="
                    row-span-1
                    w-full
                    justify-around
                    flex
                    items-center
                "
            >
                <PrimaryCtaGhost>ホームへ</PrimaryCtaGhost>
                <PrimaryCtaGhost>前のページへ</PrimaryCtaGhost>
            </div>
        </dialog>
    {/if}
</div>
