<script lang="ts">
  import { onMount } from "svelte";
  import { studentModalState } from "$lib/admin/stores/modalControl";

  import { slide } from "svelte/transition";

  import type { SelectDef } from "$lib/admin/data/inputs";
  import type { Course } from "$lib/admin/data/course";

  export let definitions: SelectDef;
  export let data: Course;

  function handleUpdate(key: string, e: Event) {
    const target = e.target as HTMLInputElement;
    data[key] = target.value;
    data.validateData();

    $studentModalState.errors = handleModalErrorList(data);
  }

  function handleModalErrorList() {}
</script>

<select>
  <option>{definitions.label}</option>
  {#each definitions.options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
