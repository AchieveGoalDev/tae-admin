<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import { slide } from "svelte/transition";

  import type { Collection } from "./FaqDefs";
  import Question from "$lib/faq/Question.svelte";

  export let collection: Collection;

  let expanded = false;
  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  if (collection.id === "0") {
    expanded = true;
  }

  function handleBGClosed() {
    return `bg-primary-dark text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center`;
  }

  function handleBGOpen() {
    return `bg-primary-medium text-white rounded-lg p-2 text-2xl md:text-3xl font-bold flex w-full items-center`;
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
      class={`bg-primary-ultralight py-3 px-2 rounded-md`}
    >
      {#each collection.questions as question}
        <Question {question} />
      {/each}
    </div>
  {/if}
</div>
