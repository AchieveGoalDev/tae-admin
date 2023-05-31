<script lang="ts">
  import { slide } from "svelte/transition";

  import type { EmailInput } from "$lib/forms/ApplicationData";

  export let data: EmailInput;

  let errorMessage: string[];

  export let isValid: boolean;
  export let value: string;


  let mailOne: string;
  let mailTwo: string;

  function validateEmail(mailOne: string, mailTwo: string) {
    let errorMessage: string[] = [];

    function checkToyo(input: string) {
      let regex = /^.*@toyo\.jp$/i;
      console.log("regexTest", regex.test(input));
      return regex.test(input);
    }

    function checkIniad(input: string) {
      let regex = /^.*@iniad\.org$/i;
      return regex.test(input);
    }

    function checkValidMail(input: string) {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(input);
    }

    if (mailOne) {
      if (!checkValidMail(mailOne)) {
        errorMessage.push(`有効なメールアドレスを入力してください`);
      }

      if (mailOne !== mailTwo) {
        errorMessage.push(
          "入力したメールは一致していない。確認して、もう一度入力してください"
        );
      }
    }

    if (data.isNecessary && mailOne) {
      if (!checkToyo(mailOne) && !checkIniad(mailOne)) {
        errorMessage.push(
          `"@toyo.jp"、"@iniad.org"のアドレスを入力してください`
        );
      }
    }

    if (data.isNecessary && !value) {
      errorMessage.push("必要項目です");
    }

    return errorMessage;
  }

  $: value = mailOne;
  $: errorMessage = validateEmail(mailOne, mailTwo);
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
    <input
      name={data.alt}
      type="email"
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
            w-[200px]
          `}
      alt={data.alt}
      placeholder={data.placeholder}
      bind:value={mailOne}
      maxlength={30}
    />
    <span>
      <input
        name={data.alt}
        type="email"
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
              w-[200px]
            `}
        alt={"確認のための" + data.alt}
        placeholder={data.placeholder}
        bind:value={mailTwo}
        maxlength={30}
        on:paste|preventDefault
      />
      <strong>確認用</strong>
    </span>
    {#each data.desc as line}
      <p class="text-slate-600 text-sm my-1">
        {line}
      </p>
    {/each}
    {#if !isValid}
      {#each errorMessage as error}
        <p transition:slide|local class="text-red-600 my-1">{error}</p>
      {/each}
    {/if}
  </div>
</div>
