<script lang="ts">
  import TextInput from "$lib/forms/input/TextInput.svelte";
  import {
    学籍番号Data,
    氏名Data,
    フリガナData,
    英字名FirstData,
    英字名LastData,
  } from "$lib/forms/ApplicationData";

  function calculatePercentValid(validArray: boolean[]) {
    let validTotal = 0;
    validArray.forEach((item) => {
      if (item) {
        validTotal++;
      }
    });

    return (validArray.length / validTotal) * 100;
  }

  let 学籍番号: string;
  let 学籍番号isValid: boolean = false;

  let 氏名: string;
  let 氏名isValid: boolean = false;

  let allValid: boolean;
  let toValidate: boolean[];

  let フリガナ: string;
  let フリガナisValid: boolean = false;

  let 英字名First: string;
  let 英字名FirstisValid: boolean;

  let 英字名Last: string;
  let 英字名LastisValid: boolean;

  $: toValidate = [
    学籍番号isValid,
    氏名isValid,
    フリガナisValid,
    英字名FirstisValid,
    英字名LastisValid,
  ];

  $: toValidate.forEach((input) => {
    console.log("fired");
    if (!input) {
      allValid = false;
    } else {
      allValid = true;
    }
  });

  $: console.log(calculatePercentValid(toValidate), "percent valid");

  $: console.log(toValidate);
</script>

<div class="grid grid-cols-12 ">
  <TextInput
    bind:inputVal={学籍番号}
    bind:isValid={学籍番号isValid}
    data={学籍番号Data}
  />

  <TextInput bind:inputVal={氏名} bind:isValid={氏名isValid} data={氏名Data} />

  <TextInput
    bind:inputVal={フリガナ}
    bind:isValid={フリガナisValid}
    data={フリガナData}
  />

  <TextInput
    bind:inputVal={英字名First}
    bind:isValid={英字名FirstisValid}
    data={英字名FirstData}
  />

  <TextInput
    bind:inputVal={英字名Last}
    bind:isValid={英字名LastisValid}
    data={英字名LastData}
  />
</div>

<button
  on:click|preventDefault
  disabled={!allValid}
  class="mb-50 p-2 bg-sky-800 mx-auto rounded-md cursor-pointer text-white transitions-all ease-in hover:bg-sky-700 disabled:bg-slate-800 disabled:cursor-not-allowed"
  >Submit</button
>
