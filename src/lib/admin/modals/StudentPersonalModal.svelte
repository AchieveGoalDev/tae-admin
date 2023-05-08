<script lang="ts">
  import type { Personal } from "$lib/admin/data/personal";
  import { student } from "$lib/admin/editData";
  import { personalInputs } from "$lib/admin/data/inputs";

  import TextInput from "$lib/admin/modals/inputs/TextInput.svelte";

  let data = $student;

  function writeToStudentStore(data: Personal) {
    $student = data;
  }

  $: writeToStudentStore(data);
</script>

<div class="grid grid-cols-3 my-4　gap-y-4 mx-3">
  {#each personalInputs as input (input.label)}
    {#if input.type === "input"}
      <TextInput definitions={input} {data} />
      <hr class="col-span-full" />
    {/if}
  {/each}
</div>
 