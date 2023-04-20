<script lang="ts">
  import { fade } from "svelte/transition";
  import { student } from "../editData";
  import { modalState } from "$lib/admin/stores/modalControl";

  import ModalSend from "$lib/admin/tooltips/ModalSend.svelte";

  import type { Personal } from "$lib/admin/data/personal";
  import type { ModalState } from "$lib/admin/stores/modalControl";

  export let control: boolean;
  let send: boolean;
  let canSend: boolean = false;

  const db =
    "https://8grjl0fpxk.execute-api.ap-northeast-1.amazonaws.com/production/students";

  async function handleDBPut(data: Personal) {
    const response = await fetch(db, {
      mode: "cors",
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        //prettier-ignore
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        name: data.name,
        gender: data.gender,
      }),
    }).then((response) => response.json());
    console.log("From inside fetch", response);
    return response;
  }

  function handleSend(sendState: boolean) {
    if (sendState) {
      console.log("fired send");
      send = !send;

      const response = handleDBPut($student);
      console.log(response);
    }
  }

  function handleCanSend(data: ModalState) {
    if (data.errors.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  $: handleSend(send);
  $: canSend = handleCanSend($modalState);
  $: hoverSend = false;
  $: console.log(hoverSend);
</script>

<div
  class="relative z-10"
  aria-modal="true"
  role="dialog"
  transition:fade={{ duration: 75 }}
>
  <div
    class="fixed inset-0 bg-slate-800 bg-opacity-75 transition transition-opacity"
  />
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        class="bg-white shadow-2xl grid grid-rows-[12] max-w-2/3 min-h-[500px]"
      >
        <div
          class="flex font-bold text-xl items-center justify-center bg-primary-dark text-white py-2"
        >
          新規学生登録 - 個人情報
        </div>
        <div
          class="row-start-[2] row-end-[12] overflow-y-scroll px-3 max-h-[500px]"
        >
          <slot />
        </div>
        <div
          class="row-start-[12] row-span-1 w-full bg-primary-ultralight h-full items-center flex flex-row place-content-around py-2"
        >
          <button
            class="bg-rose-700 text-lg text-white rounded-md p-1 transition transitions-all hover:bg-rose-600 shadow-md"
            on:click={() => {
              control = !control;
            }}>閉じる</button
          >
          {#if canSend}
            <button
              class="bg-secondary-dark text-lg text-white rounded-md p-1 transition transitions-all hover:bg-secondary-medium shadow-md disabled:bg-gray-800 disabled:text-slate-300 disabled:shadow-sm disabled:cursor-not-allowed"
              on:click={() => {
                send = !send;
              }}>送信</button
            >
          {:else}
            <!--svelte-ignore a11y-mouse-events-have-key-events-->
            <div
              on:mouseover={() => (hoverSend = true)}
              on:mouseleave={() => (hoverSend = false)}
              class="p-1 relative"
            >
              <button
                disabled={true}
                class="bg-secondary-dark text-lg text-white rounded-md p-1 transition transitions-all hover:bg-secondary-medium shadow-md disabled:bg-gray-800 disabled:text-slate-300 disabled:shadow-sm disabled:cursor-not-allowed"
                >送信</button
              >
            </div>
            {#if hoverSend}
              <ModalSend errorlist={$modalState.errors} />
            {/if}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
