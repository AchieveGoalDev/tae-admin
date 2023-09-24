<script lang="ts">
  //@ts-nocheck
  import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import { authorize } from "$lib/api/auth/authorize";

  let loaded = false;

  let logged = false;

  let email: string;
  let password: string;

  let superSecretEmail = "info@acheive-english.jp";
  let superSecretPassword = "achieveenglish2239";
  let errors = [];

  let showPass = false;

  function superSecretAuthentication() {
    if (superSecretEmail === email && superSecretPassword === password) {
      logged = true;
    } else {
      password = "";
      errors = ["メールまたはパスワードは正しくありません。"];
    }
  }

  onMount(() => (loaded = true));

  $: if (logged) {
    goto("/admin.html", { replaceState: true });
  }
</script>

{#if loaded}
  <dialog
    in:fly={{ y: 50, duration: 1000 }}
    class="bg-neutral-light
        w-1/2
        h-2/3
        grid
        gap-none
        shadow-lg
        outline
        outline-4
        outline-dark-light
        font-noto
        p-0
        "
  >
    <div class="items-center justify-center grid grid-cols-3">
      <div class=" col-span-1 bg-secondary-medium h-full w-full">
        <div class="flex flex-col h-full items-center pt-[33%]">
          <img
            class="p-2 rounded-full w-1/2 mx-auto bg-white m-3"
            src="https://dh63x6re274g0.cloudfront.net/images/TAENavLogo.svg"
            alt="Toyo Achieve English ロゴ"
          />
          <h1 class="text-xl font-black text-neutral-ultralight mx-2">
            管理ダッシュボード
          </h1>
        </div>
      </div>
      <div
        class="col-span-2 px-auto flex flex-col h-full items-center justify-center"
      >
        <h2 class="text-3xl text-dark-medium mb-[10%]">ログイン</h2>
        <form>
          <div class="flex flex-col mx-auto">
            <label class="font-bold" for="mail">メール</label>
            <input
              class="mt-4 rounded-sm p-2 bg-neutral-ultralight shadow-sm text-dark-light"
              type="text"
              bind:value={email}
              name="mail"
            />
          </div>
          <div class="flex flex-col mx-auto mt-4">
            <label class="font-bold" for="password">パスワード</label>
            <input
              class="mt-4 rounded-sm p-2 bg-neutral-ultralight shadow-sm text-dark-ultralight"
              type="password"
              bind:value={password}
              name="password"
            />
          </div>
          <button
            class="w-1/2 mt-[10%] bg-primary-dark hover:bg-primary-medium font-bold transitions transition-all flex py-2 px-5 mx-auto rounded-md text-white justify-center"
            on:click|preventDefault={superSecretAuthentication}>ログイン</button
          >
        </form>
        {#each errors as error}
          <p transition:fly class="text-red-800">{error}</p>
        {/each}
      </div>
    </div>
  </dialog>
{/if}
