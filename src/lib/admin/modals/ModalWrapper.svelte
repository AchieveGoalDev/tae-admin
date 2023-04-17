<script lang="ts">
  import { fade } from "svelte/transition";
  import { student } from "../editData";

  import type { Personal } from "$lib/admin/data/application";

  export let control: boolean;
  let send: boolean;

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
        Origin: "https://jocular-cactus-6e66e6.netlify.app",
      },
      referrerPolicy: "no-referrer",
      body: `{
        "TableName": "tae-test",
    "Item": {
        "PK": {
            "S": "STUDENT" 
        },
        "SK": {
            "S": "${data.name}"
        },
        "name": {
            "S": "${data.name}"
        }
        "gender": {
            "S": "${data.gender}"
        }
    }
      }`,
    });

    console.log(response);
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

  $: handleSend(send);
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
      <div class="bg-white shadow-2xl grid grid-rows-[12] w-2/3 min-h-[500px]">
        <div
          class="flex font-bold text-xl items-center justify-center bg-primary-dark text-white"
        >
          新規学生登録 - 個人情報
        </div>
        <div class="row-start-[2] row-end-[12] overflow-y-scroll">
          <slot />
        </div>
        <div
          class="row-start-[12] row-span-1 w-full bg-primary-ultralight h-full items-center flex flex-row place-content-around"
        >
          <button
            class="bg-rose-700 text-lg text-white rounded-md p-1 transition transitions-all hover:bg-rose-600 shadow-md"
            on:click={() => {
              control = !control;
            }}>閉じる</button
          >
          <button
            class="bg-secondary-dark text-lg text-white rounded-md p-1 transition transitions-all hover:bg-secondary-medium shadow-md"
            on:click={() => {
              send = !send;
            }}>送信</button
          >
        </div>
      </div>
    </div>
  </div>
</div>
