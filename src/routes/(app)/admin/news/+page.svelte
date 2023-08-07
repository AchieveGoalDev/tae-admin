<script lang="ts">
  //@ts-nocheck
  import { createArticle } from "$lib/api/news/createArticle";
  import dayjs from "dayjs";
  import "dayjs/locale/ja.js";
  import { Datepicker } from "svelte-calendar";

  import type { Article } from "$lib/news/ArticleDef";

  let date = new Date();
  let locale = dayjs.locale("ja");
  let data: Article = {
    id: "id",
    title: "",
    htmlContent: "",
    imageUrl: "",
    imageAlt: "",
    creationDate: date,
    tags: [],
  };

  $: console.log(date);

  const theme = {
    calendar: {
      width: "300px",
    },
    font: {
      "regular:": "1em",
      large: "1.5em",
    },
  };
</script>

<div class="w-full">
  <form class="w-full flex flex-col px-[10%]">
    <label for="title">Title</label>
    <input name="title" type="text" bind:value={data.title} />
    <label for="image">Image</label>
    <input name="image" type="text" bind:value={data.image} />
    <label for="alt">Image Alt</label>
    <input name="alt" type="text" bind:value={data.alt} />
    <label for="content">HTML Content</label>
    <textarea name="content" bind:value={data.content} />

    <div class="w-full flex flex-row justify-center mt-[20%]">
      <Datepicker
        value={{ locale }}
        bind:selected={data.creationDate}
        {theme}
      />
    </div>
    <button
      class="p-2 bg-primary-medium hover:bg-primary-dark mt-2"
      on:click|preventDefault={createArticle(data)}>Submit</button
    >
  </form>
</div>
