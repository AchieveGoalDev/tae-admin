<script lang="ts">
  import { onMount } from "svelte";
  import { modalState } from "$lib/admin/stores/modalControl";
  import { slide } from "svelte/transition";

  import ValidationIconSlider from "$lib/admin/modals/inputs/ValidationIconSlider.svelte";

  import type { Personal } from "$lib/admin/data/personal";
  import type { InputDef } from "$lib/admin/data/inputs";

  export let definitions: InputDef;
  export let data: Personal;

  let wasFocused = false;
  let displayError = false;

  function handleUpdate(key: string, e: Event) {
    const target = e.target as HTMLInputElement;
    data[key] = target.value;
    data.validateData();

    $modalState.personalErrors = handleModalErrorList(data);
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
      if (item.length > 0) {
        returnList.push(toPush);
      }
    };

    const errors = data.errors;

    for (let i = 0; i < keysAndValues.length; i++) {
      checkLength(errors[keysAndValues[i][0]], keysAndValues[i][1]);
    }
    return returnList;
  }

  function handleSize(size: string | null) {
    switch (size) {
      case "sm":
        return "4em";
      case "med":
        return "8em";
      case "lg":
        return "12em";
      default:
        return "8em";
    }
  }

  onMount(async () => {
    data.validateData();
    $modalState. = handleModalErrorList(data);
    data = data;
  });

  $: if (wasFocused) {
    data.validateData();
    $modalState.personalErrors = handleModalErrorList(data);

    displayError = true;
    wasFocused = false;
  }
</script>

<label class="font-bold self-center  me-2" for={definitions.label}>
  <div class="flex flex-col px-1 content-center">
    <span>{definitions.label}:</span>
    {#if definitions.sublabel}
      <sub class="mt-1 font-normal italic text-stone-500"
        >{definitions.sublabel}</sub
      >
    {/if}
  </div>
</label>
<div class="col-span-2 flex-col">
  <span class="flex">
    <input
      style:width={handleSize(definitions.size)}
      class="
			ml-2
			p-1 
			me-3 
			self-center 
			justify-self-start 
			shadow-md 
			transition 
			transition 
			transitions-all 
			focus:bg-primary-ultralight
			border-solid
			border-primary-medium
			focus:border-l-4
			bg-stone-50
			"
      on:focus={() => (wasFocused = true)}
      on:input={(e) => handleUpdate(definitions.key, e)}
      name={definitions.label}
      value={data[definitions.key]}
      placeholder={definitions.placeholder}
    />
    <ValidationIconSlider
      {displayError}
      errors={data.errors[definitions.key]}
      isRequired={definitions.isRequired}
    />
  </span>
  <div
    class="flex flex-col justify-start items-start bg-red-50 max-w-[10em] mt-2 ml-2"
  >
    {#if displayError}
      {#each data.errors[definitions.key] as error}
        <p transition:slide class="text-xs m-2 text-red-600 text-left">
          {error}
        </p>
      {/each}
    {/if}
  </div>
</div>
