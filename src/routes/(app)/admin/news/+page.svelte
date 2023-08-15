<script lang="ts">
  //@ts-nocheck
  import { createArticle } from "$lib/api/news/createArticle";
  import LocalizedDatepicker from "$lib/datetime/LocalizedDatepicker.svelte";

  import type { Article } from "$lib/news/ArticleDef";

  let date = new Date();

  let data: Article = {
    id: "id",
    title: "",
    htmlContent: "",
    imageUrl: "",
    imageAlt: "",
    creationDate: date,
    tags: [],
  };

  $: console.log(data);

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
  <form class="w-full flex flex-col px-[10%] pb-[1rem]">
    <label for="title">Title</label>
    <input name="title" type="text" bind:value={data.title} />
    <label for="image">Image</label>
    <input name="image" type="text" bind:value={data.imageUrl} />
    <label for="alt">Image Alt</label>
    <input name="alt" type="text" bind:value={data.imageAlt} />
    <label for="content">HTML Content</label>
    <textarea name="content" bind:value={data.htmlContent} class="h-[300px]" />

    <LocalizedDatepicker bind:selected={data.creationDate} />
    <button
      class="p-2 bg-primary-medium hover:bg-primary-dark my-2"
      on:click|preventDefault={createArticle(data)}>Submit</button
    >
  </form>
</div>
