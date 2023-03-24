<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import { slide } from "svelte/transition";

  import type { Collection } from "./FaqDefs";
  import Question from "$lib/faq/Question.svelte";

  export let collection: Collection;

  export let color: string;

  let colorData: any;

  let expanded = false;
  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  if (collection.id === "0") {
    expanded = true;
  }

  let redColorData = {
    darkbg: "bg-rose-700",
    highlightbg: "bg-rose-600",
    background: "bg-rose-50",
    border: "border-rose-700",
  };

  let blueColorData = {
    darkbg: "bg-blue-800",
    highlightbg: "bg-blue-600",
    background: "bg-yellow-50",
    border: "border-blue-700",
  };

  $: if (color === "red") {
    colorData = redColorData;
  } else if (color === "blue") {
    colorData = blueColorData;
  }

  function handleBGClosed() {
    return `${colorData.darkbg} text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center`;
  }

  function handleBGOpen() {
    return ` ${colorData.highlightbg} text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center`;
  }
</script>

<div class="my-5 text-xl flex-col shadow-md">
  <button
    on:click={() => {
      expanded = !expanded;
    }}
    id={"id" + collection.id}
    class={expanded ? handleBGOpen() : handleBGClosed()}
  >
    {#if expanded}
      <img
        src={s3 + "images/Icons/circleMinus.svg"}
        class="h-[30px] mr-3"
        alt="拡大"
      />
    {:else}
      <img
        src={s3 + "images/Icons/circlePlus.svg"}
        class="h-[30px] mr-3"
        alt="縮小"
      />
    {/if}
    {collection.title}
  </button>
  {#if expanded}
    <div
      transition:slide={{ duration: 500 }}
      class={`${colorData.background} py-3 px-2 rounded-md`}
    >
      {#each collection.questions as question}
        <Question {question} />
      {/each}
    </div>
  {/if}
</div>
