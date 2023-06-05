<script lang="ts">
  import DarkToggle from "./DarkToggle.svelte";
  import { user } from "$lib/stores/user";

  export let logged: boolean;
</script>

<div class="flex flex-row-reverse w-full items-center pr-10 pt-3 text-lg">
  <DarkToggle />
  <button
    on:click={() => (logged = false)}
    class="ml-10 font-black outline outline-solid outline-2 outline-black rounded-lg p-2 hover:bg-black hover:text-white transition-all"
    >ログアウト</button
  >
  <div class="">{$user.title}</div>
  <span class="mx-2">-</span>
  <span>さん</span>
  <div class="font-bold">{$user.name}</div>
  <div
    class="h-[3rem] w-[3rem] outline outline-solid outline-black outline-2 mr-2 rounded-full"
  />
</div>
