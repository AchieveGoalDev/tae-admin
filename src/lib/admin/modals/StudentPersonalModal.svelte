<script lang="ts">
  import type { Personal } from "$lib/admin/data/application";
  import { student } from "$lib/admin/editData";
  import { modalState } from "$lib/admin/stores/modalControl";
  import { personalInputs } from "$lib/admin/data/inputs";

  import TextInput from "$lib/admin/modals/inputs/TextInput.svelte";

  let data = $student;

  function writeToStudentStore(data: Personal) {
    $student = data;
  }

  function handleModalErrorList(data: Personal) {
    data.validateData();

    data = data;

    const keysAndValues = [
      ["address", "住所"],
      ["number", "学籍番号"],
      ["name", "氏名"],
      ["furigana", "フリガナ"],
      ["first", "英字名（名前）"],
      ["last", "英字名（名字）"],
      ["year", "学年"],
      ["major", "学部"],
      ["faculty", "学科"],
    ];
    const returnList: string[] = [];

    //If key has an error message, then the string to be formatted into a message is pushed
    const checkLength = (item: string[], toPush: string) => {
      console.log("checking", item, toPush);

      if (item.length > 0) {
        returnList.push(toPush);
      }
    };

    const errors = data.errors;

    for (let i = 0; i < keysAndValues.length; i++) {
      checkLength(errors[keysAndValues[i][0]], keysAndValues[i][1]);
    }

    $modalState.checkErrors = false;
    return returnList;
  }

  $: writeToStudentStore(data);
  $: if ($modalState.checkErrors) {
    $modalState.errors = handleModalErrorList($student);
  }
  $: console.log($modalState);
</script>

<div class="grid grid-cols-3 my-4　gap-y-4 mx-3">
  {#each personalInputs as input (input.label)}
    {#if input.type === "input"}
      <TextInput definitions={input} {data} />
    {/if}
  {/each}
</div>
