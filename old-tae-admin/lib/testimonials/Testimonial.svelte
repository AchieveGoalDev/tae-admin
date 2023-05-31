<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import { slide, fade } from "svelte/transition";
  import Quote from "$lib/testimonials/Quote.svelte";
  import Profile from "$lib/testimonials/Profile.svelte";
  import { data, type TestimonialProfile } from "./TestimonialData";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;
  let index = 0;
  let expanded = false;
  let display = true;
  let currentData = data[0];

  function handleLeft() {
    display = false;
    let max = data.length - 1;
    if (index === 0) {
      index = max;
    } else {
      index--;
    }
  }

  function handleRight() {
    display = false;
    let max = data.length - 1;
    if (index === max) {
      index = 0;
    } else {
      index++;
    }
  }

  const cycler = (direction: string) => {
    display = false;

    if (direction === "left") {
      handleLeft();
    } else if (direction === "right") {
      handleRight();
    }

    currentData = data[index];

    setTimeout(() => (display = true), 400);
  };
</script>

<div class="w-full shadow-lg bg-slate-10 relative min-h-[300px]">
  <div>
    {#if !expanded}
      <button
        transition:fade
        on:click={() => cycler("left")}
        class="absolute left-0 top-1/3 text-xl rounded-tr-full rounded-br-full bg-rose-800 text-white text-xl py-2 pl-1 transition-all opacity-50 hover:bg-rose-700 hover:opacity-100 h-[100px]"
      >
        <img
          alt={"前へ"}
          src={s3 + "images/chevron_left_white.svg"}
          class="h-[30px]"
        />
      </button>
      <button
        on:click={() => cycler("right")}
        transition:fade
        class="absolute right-0 top-1/3 text-xl rounded-tl-full rounded-bl-full bg-rose-800 text-white text-xl py-2 pl-1 transition-all opacity-50 hover:bg-rose-700 hover:opacity-100 h-[100px]"
      >
        <img
          alt={"次へ"}
          src={s3 + "images/chevron_right_white.svg"}
          class="h-[30px]"
        />
      </button>
      {#key index}
        <div
          style:display={"grid"}
          style:grid-row={"1"}
          style:grid-column={"1"}
          class="mx-auto text-center shadow-lg"
        >
          {#if display && currentData}
            <Quote data={currentData} />
          {/if}
        </div>
      {/key}
    {/if}
    <button
      on:click={() => (expanded = !expanded)}
      class="font-bold text-2xl pb-2 w-full bg-rose-800 text-white transition-all ease-in hover:bg-rose-700 hover:scale-[102%]"
      >{expanded ? "閉じる" : "詳細を見る"}</button
    >
    {#if expanded}
      <div transition:slide|local class="bg-orange-100">
        <Profile data={data[index]} />
      </div>
    {/if}
  </div>
</div>
