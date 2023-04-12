<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let handleAdd: any;
  export let data: any;
  export let alt: string;
</script>

<button on:click={() => handleAdd(data)}>
  <img
    class="rounded-full p-1 shadow-xl bg-primary-dark transition-all hover:scale-105 hover:bg-primary-medium h-[35px] mx-auto my-auto"
    src={s3 + "images/Icons/add.svg"}
    {alt}
  />
</button>
