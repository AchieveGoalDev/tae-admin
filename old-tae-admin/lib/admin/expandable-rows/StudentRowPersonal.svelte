<script lang="ts">
  import type { Student } from "$lib/admin/data/application";

  export let data: Student;
  export let edit: boolean;
</script>

<div class="p-2">
  {#if !edit}
    <span class="font-bold">名前: </span>{data.personalData.first}
  {:else}
    <div class="flex place-content-around w-full">
      <label class="font-bold">
        名前:
        <input
          type="text"
          placeholder={data.personalData.first}
          class="shadow-md"
        />
      </label>
      <p class="text-rose-600">変更前: {data.personalData.first}</p>
    </div>
  {/if}
</div>
