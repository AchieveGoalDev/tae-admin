<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import { horizontalSlide } from "$lib/transitions/transitions";

  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let filterData;

  let filterToggle: boolean;

  function toggleFilter() {
    filterToggle = !filterToggle;
  }
</script>

<div class="flex  bg-primary-medium p-1 justify-self-end">
  {#if !filterToggle}
    <select transition:horizontalSlide>
      <option> --フィルターなし-- </option>
      <option> --キャンパス-- </option>
    </select>
  {/if}
  <button
    class={`curor-pointer transition-all ${
      filterToggle ? "bg-primary-dark" : "bg-primary-light"
    }`}
    on:click={toggleFilter}
  >
    <img
      src={filterToggle
        ? s3 + "images/Icons/filter.svg"
        : s3 + "images/Icons/filterOff.svg"}
      alt="データをフィルター"
      class="h-[30px]"
    />
  </button>
</div>