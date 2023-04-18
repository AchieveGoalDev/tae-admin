<script lang="ts">
  import type { Personal } from "$lib/admin/data/application";
  import { student } from "$lib/admin/editData";
  import { personalInputs } from "$lib/admin/data/inputs";

  import TextInput from "$lib/admin/modals/inputs/TextInput.svelte";

  let data = $student;

  function writeToStore(data: Personal) {
    $student = data;
  }

  $: writeToStore(data);
  $: console.log($student);
</script>

<div class="grid grid-cols-4 my-4　gap-y-4 mx-3">
  {#each personalInputs as input}
    {#if input.type === "input"}
      <TextInput label={input.label} key={input.key} {data} size={input.size} />
    {/if}
  {/each}
</div>
