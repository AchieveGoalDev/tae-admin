<script lang="ts">
    import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { authorize } from "$lib/api/auth/authorize";

    let loaded = false;

    let logged = false;

    let email: string;
    let password: string;

    let showPass = false;

    function onPasswordInput(e: Event) {
        const target = e.target as HTMLInputElement;

        if (target) {
            password = target.value;
        }
    }

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
            <div class="col-start-1 justify-right"><span>メール</span></div>
            <div class="col-start-2">
                <input type="text" bind:value={email} />
            </div>
            <div class="col-start-1">パスワード</div>
            <div class="col-start-2">
                <span
                    ><input
                        type={showPass ? "text" : "password"}
                        on:input={onPasswordInput}
                    />
                    <button on:click={() => (showPass = !showPass)}>
                        {showPass ? "Hide" : "Show"}
                    </button>
                </span>
            </div>
        </div>
        <button on:click={authorize(email, password)}>Login</button>
    </dialog>
{/if}
