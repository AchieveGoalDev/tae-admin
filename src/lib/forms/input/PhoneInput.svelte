<script lang="ts">
  import { slide } from "svelte/transition";

  import type { PhoneInput } from "$lib/forms/ApplicationData";

  export let data: PhoneInput;

  let errorMessage: string[];

  let phoneOne: string;
  let phoneTwo: string;
  let phoneThree: string;

  export let isValid: boolean;
  export let value: string;

  function checkValidPhone(
    phoneOne: string,
    phoneTwo: string,
    phoneThree: string
  ) {
    function checkDigits(input: string) {
      if (!input) {
        return true;
      }
      let regex = /^[0-9]*$/;
      return regex.test(input);
    }

    let errorMessage: string[] = [];

    if (phoneOne || phoneTwo || phoneThree) {
      if (
        !checkDigits(phoneOne) ||
        !checkDigits(phoneTwo) ||
        !checkDigits(phoneThree)
      ) {
        errorMessage.push("半角数字で入力してください");
      }
    }

    if (phoneOne) {
      if (phoneOne.split("").length < 2) {
        errorMessage.push("有効な電話番号を入力してください");
        console.log("one");
      } else if (!phoneTwo || phoneTwo.split("").length < 3) {
        console.log("two");
        errorMessage.push("有効な電話番号を入力してください");
      } else if (!phoneThree || phoneThree.split("").length < 3) {
        console.log("three");
        errorMessage.push("有効な電話番号を入力してください");
      }
    }

    if (data.isNecessary && !value) {
      errorMessage.push("必要項目です");
    }

    return errorMessage;
  }

  $: errorMessage = checkValidPhone(phoneOne, phoneTwo, phoneThree);

  $: value = phoneOne + "-" + phoneTwo + "-" + phoneThree;

  $: if (errorMessage.length > 0) {
    isValid = false;
  } else {
    isValid = true;
  }
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <label
    class="font-bold text-right col-span-3 border-r pr-4 w-full h-full"
    for={data.label}
  >
    {#if data.isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}
  </label>
  <div class="pl-5 flex flex-col my-2 col-span-8">
    <span>
      <input
        name={data.label + "市外局番"}
        type="text"
        style:background-color={isValid ? "white" : "#fef2f2"}
        style:outline-color={isValid ? "" : "#b91c1c"}
        class={`shadow-md 
            rounded-sm 
            transitions-all 
            ease-in 
            border-2 
            border-black 
            focus:outline-sky-500 
            focus:outline-2 
            bg-white 
            pl-2
            py-1
            my-2
            w-[75px]
          `}
        alt={"電話番号の市外局番"}
        bind:value={phoneOne}
        maxlength={4}
      />
      -
      <input
        name={data.label + "市内局番"}
        type="text"
        style:background-color={isValid ? "white" : "#fef2f2"}
        style:outline-color={isValid ? "" : "#b91c1c"}
        class={`shadow-md 
        rounded-sm 
        transitions-all 
        ease-in 
        border-2 
        border-black 
        focus:outline-sky-500 
        focus:outline-2 
        bg-white 
        pl-2
        py-1
        my-2
        w-[75px]
      `}
        alt={"電話番号の市内局番"}
        bind:value={phoneTwo}
        maxlength={4}
      />
      -
      <input
        name={data.label + "加入者番号"}
        type="text"
        style:background-color={isValid ? "white" : "#fef2f2"}
        style:outline-color={isValid ? "" : "#b91c1c"}
        class={`shadow-md 
      rounded-sm 
      transitions-all 
      ease-in 
      border-2 
      border-black 
      focus:outline-sky-500 
      focus:outline-2 
      bg-white 
      pl-2
      py-1
      my-2
      w-[75px]
    `}
        alt={"電話番号の加入者番号"}
        bind:value={phoneThree}
        maxlength={4}
      />
    </span>
    {#each data.desc as line}
      <p class="text-slate-600 text-sm my-1">
        {line}
      </p>
    {/each}
    {#if !isValid}
      {#each errorMessage as error}
        <p transition:slide|local class="text-red-600 my-2">{error}</p>
      {/each}
    {/if}
  </div>
</div>
