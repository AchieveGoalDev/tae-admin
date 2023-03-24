<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  //@ts-ignore
  import * as animateScroll from "svelte-scrollto";
  import type { Collection } from "./FaqDefs";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let collections: Collection[];
  export let color: string;

  let colorData: any;

  let redColorData = {
    darkbg: "bg-rose-700",
    background: "bg-rose-50",
    border: "border-rose-700",
  };

  let blueColorData = {
    darkbg: "bg-blue-700",
    background: "bg-blue-50",
    border: "border-blue-700",
  };

  $: if (color === "red") {
    colorData = redColorData;
  } else if ((color = "blue")) {
    colorData = blueColorData;
  }
</script>

<div
  class={`border-l-4 ${colorData.border} my-5 py-2 ${colorData.background} w-auto`}
>
  <h2 class="mx-3 text-2xl font-bold">カテゴリーを見る</h2>
  <div class="md:grid grid-cols-2">
    {#each collections as collection}
      <button
        class="flex items-center ml-5 transition-all hover:-translate-y-1 hover:scale-105"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#id" + collection.id,
            duration: 400,
            offset: -80,
          })}
      >
        <img
          src={s3 + "images/Icons/link.svg"}
          alt=""
          class={`h-[20px] rounded-full ${colorData.darkbg}`}
        />
        <p class="block my-2 ml-2 underline">{collection.title}</p>
      </button>
    {/each}
  </div>
</div>
