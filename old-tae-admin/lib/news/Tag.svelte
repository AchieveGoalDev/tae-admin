<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import type { Tag } from "$lib/news/TagDefs";
  import { fly } from "svelte/transition";

  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let tag: Tag;
  export let toUpdate: boolean;

  function buildTagClass(color: string) {
    return (
      color +
      " px-2 text-white p-1 inline-block m-1 rounded-full font-bold select-none"
    );
  }

  function unselect() {
    tag.toggleIsSelected();
    toUpdate = true;
  }
</script>

{#if tag.isSelected}
  <div
    transition:fly={{ x: 10, duration: 300 }}
    class={buildTagClass(tag.color)}
  >
    <div class="flex flex-row content-center justify-items-center">
      <p>
        {tag.text}
      </p>
      <button on:click={unselect} />
      <img
        class="transition ease-in-out hover:cursor-pointer hover:scale-105 ml-1 my-auto inline-block h-[20px] w-[20px] text-white"
        src={s3 + "images/cancel-icon.svg"}
        alt="タグを消去"
      />
    </div>
  </div>
{/if}
