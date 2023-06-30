<script lang="ts">
    import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";

    import { handleAPIPost } from "$lib/api/RESTFunctions";

    async function login() {
        const testData = {
            password: "hummana",
        };

        const response = await handleAPIPost(
            testData,
            PUBLIC_API_GATEWAY_URL + "/auth"
        );

        console.log(JSON.stringify(response));

        logged = true;
    }

    let loaded = false;

    //TODO placeholder login function/ Make real login functionality
    let logged = false;

    onMount(() => (loaded = true));

    $: if (logged) {
        goto("/admin", { replaceState: true });
    }
</script>

{#if loaded}
    <dialog
        in:fly={{ y: 50, duration: 1000 }}
        class="bg-gradient-to-b from-stone-50 to-stone-100 w-1/3 h-2/3 grid grid-rows-3 grid-cols-1 shadow-lg"
    >
        <div class="row-span-1 flex items-center justify-center">
            <h3 class="text-3xl font-bold">ログイン</h3>
        </div>
        <div class="grid grid-cols-2">
            <div class="col-start-1 justify-right"><span>ユーザー名</span></div>
            <div class="col-start-2"><input /></div>
            <div class="col-start-1">パスワード</div>
            <div class="col-start-2"><input /></div>
        </div>
        <button on:click={login}>Login</button>
    </dialog>
{/if}
