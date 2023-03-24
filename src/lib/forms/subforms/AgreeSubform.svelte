<script lang="ts">
  import { fly, slide } from "svelte/transition";

  import {
    キャンセル,
    キャンセルShort,
    受講に関して,
    受講Short,
    AgreeInput,
  } from "$lib/forms/subforms/AgreeSubformData";

  import FormSectionHeading from "$lib/forms/text/FormSectionHeading.svelte";
  import FormSectionDescription from "$lib/forms/text/FormSectionDescription.svelte";
  import CheckboxInput from "$lib/forms/input/CheckboxInput.svelte";

  type Nullable<T> = T | undefined;
  type AgreeSubformData = boolean[];

  export let id: string;
  export let percentValid: number;
  export let selfHeight: number;
  export let data: Nullable<AgreeSubformData>;

  let キャンセル1: boolean = false;
  let キャンセル2: boolean = false;
  let キャンセル3: boolean = false;
  let キャンセル4: boolean = false;

  let 受講1: boolean = false;
  let 受講2: boolean = false;
  let 受講3: boolean = false;
  let 受講4: boolean = false;
  let 受講5: boolean = false;
  let 受講6: boolean = false;
  let 受講7: boolean = false;
  let 受講8: boolean = false;
  let 受講9: boolean = false;
  let 受講10: boolean = false;

  let cacheready = false;

  function calculatePercentValid(toCheck: boolean[]) {
    let toValidate = toCheck.length;
    let validTotal = 0;

    toCheck.forEach((value) => value && validTotal++);

    return (validTotal / toValidate) * 100;
  }

  $: キャンセルArray = [キャンセル1, キャンセル2, キャンセル3, キャンセル4];

  $: 受講Array = [
    受講1,
    受講2,
    受講3,
    受講4,
    受講5,
    受講6,
    受講7,
    受講8,
    受講9,
    受講10,
  ];

  $: data = [...受講Array, ...キャンセルArray];

  $: percentValid = calculatePercentValid([...受講Array, ...キャンセルArray]);

  // $: checkCache(data);
</script>

{#if data}
  <div
    bind:clientHeight={selfHeight}
    in:slide
    out:fly={{ x: -200, opacity: 0 }}
    class="bg-white shadow-md px-5 row-span-full col-span-full top-0 inset-x-0"
  >
    <FormSectionHeading>承諾事項</FormSectionHeading>
    <FormSectionDescription>
      <p>下記の事項を承諾のうえ、全項目にチェックを入れてください。</p>
      ※必ず全てのボックスをチェックしてください。
    </FormSectionDescription>
    <FormSectionHeading>受講に関して</FormSectionHeading>
    {#each 受講Array as input, i}
      <CheckboxInput
        data={new AgreeInput(受講Short[i] + "に関して", 受講に関して[i])}
        bind:value={受講Array[i]}
      />
    {/each}
    <hr />
    <FormSectionHeading>キャンセルポリシー</FormSectionHeading>
    {#each キャンセルArray as input, i}
      <CheckboxInput
        data={new AgreeInput(キャンセルShort[i] + "に関して", キャンセル[i])}
        bind:value={キャンセルArray[i]}
      />
    {/each}
  </div>
{:else}
  <p>フォームデータを読み込み中</p>
{/if}
