<script lang="ts">
  import Pip from "$lib/hero/Pip.svelte";

  export let imgPaths: any;
  export let index: number;
</script>

<div class="flex w-full my-auto place-content-around py-5">
  {#each imgPaths as img}
    <Pip {imgPaths} {index} {img} />
  {/each}
</div>
