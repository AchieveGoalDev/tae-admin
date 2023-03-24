<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import HamburgerLink from "./HamburgerLink.svelte";
  import { slide, fade } from "svelte/transition";

  import type { NavbarContent } from "../LinkDefs";

  export let isExpanded: boolean = false;
  export let data: NavbarContent;

  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  let bgColor = "black";
  let highlightColor = "bg-slate-500";
  let lightColor = "bg-slate-300";

  if (data.color === "red") {
    bgColor = "bg-rose-700";
    highlightColor = "bg-rose-600";
    lightColor = "bg-rose-500";
  }

  if (data.color === "blue") {
    bgColor = "bg-blue-900";
    highlightColor = "bg-blue-800";
    lightColor = "bg-blue-700";
  }
</script>

<nav
  class={`${bgColor} min-h-[60px] w-full justify-content-center content-center shadow-md`}
>
  <div class="flex flex-row flex-auto w-full place-content-between p-2">
    <div class="flex flex-row">
      <div class="pl-4">
        <div class="bg-white rounded-full p-1 shadow-md min-w-[55px]">
          <img
            src={s3 + "images/TAENavLogo.svg"}
            alt="東洋アチーブイングリッシュのロゴ:"
          />
        </div>
      </div>
      <div
        class="flex-col ml-5 text-white text-lg sm:text-xl font-bold content-center justify-center text-center"
      >
        <h2>Toyo Achieve English</h2>
        <h2 class="text:xl sm:text-2xl text-2xl">{data.navText}</h2>
      </div>
    </div>
    <div class="pr-4 my-auto">
      <button
        style:display={"grid"}
        style:place-items={"center"}
        on:click={() => {
          isExpanded = !isExpanded;
        }}
      >
        {#if !isExpanded}
          <img
            style:grid-row={"1"}
            style:grid-column={"1"}
            transition:fade={{ duration: 150 }}
            src={s3 + "images/Icons/menu.svg"}
            alt="ナビゲーションメニューの展開アイコン"
            class="h-[35px] w-[35px]"
          />
        {:else if isExpanded}
          <img
            style:grid-row={"1"}
            style:grid-column={"1"}
            transition:fade={{ duration: 150 }}
            src={s3 + "images/Icons/close.svg"}
            alt="ナビゲーションメニューの展開アイコン"
            class="h-[35px] w-[35px]"
          />
        {/if}
      </button>
    </div>
  </div>
  {#if isExpanded}
    <div
      transition:slide={{ duration: 500 }}
      class="text-white text-center font-bold"
    >
      {#each data.links as link}
        <HamburgerLink linkData={link} color={highlightColor} {lightColor} />
      {/each}
      <div
        class="text-right flex flex-col items-center py-2 sm:py-0 sm:flex-row sm:h-[60px] content-center place-content-around"
      >
        <div
          class="flex flex-row my-auto place-content-evenly bg-green-700 p-2 rounded-lg transition-all active:bg-green-600 w-[250px] items-center shadow-md"
        >
          <img
            src={s3 + "images/Icons/call.svg"}
            class="h-[20px] mr-[5px]"
            alt="電話のアイコン"
          />
          <a href="tel:03-53022239">03-5302-2239</a>
        </div>
        <div
          class="flex flex-row sm:my-auto items-center place-content-evenly bg-sky-800 p-2 rounded-lg transition-all active:bg-sky-600 w-[250px] mt-2 shadow-md"
        >
          <img
            src={s3 + "images/Icons/mail.svg"}
            class="h-[20px] mr-1"
            alt="メールのアイコン"
          />
          <a
            href="mailto:info@achieve-english.jp"
            class="break-keep whitespace-nowrap">info@achieve-english.jp</a
          >
        </div>
      </div>
    </div>
  {/if}
</nav>
