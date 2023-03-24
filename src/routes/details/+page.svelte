<script lang="ts">
  import LeftColumnTitleTable from "$lib/tables/LeftColumnTitleTable.svelte";
  import { groupLesson, mtmLesson } from "$lib/tables/TableDefs";
  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import SubHeading from "$lib/headers/SubHeading.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";
</script>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "講座の", highlight: "概要", posttext: "" }}
>
  <TextWrapper>
    <SubHeading>申し込み期間</SubHeading>
    <p class="font-bold mt-3">2022年 9月23日(金) 正午12:00 〜 10月 4日(火)</p>
    <p class="text-red-600">※各クラス定員になり次第受付終了となります。</p>
  </TextWrapper>

  <TextWrapper>
    <SubHeading>受講対象者</SubHeading>
    <p class="mt-3">東洋大学在籍　学部生・大学院生・教職員</p>
  </TextWrapper>
</SectionWrapper>

<SectionWrapper
  themeColor="red"
  titleData={{ pretext: "", highlight: "開講期間・受講料", posttext: "" }}
>
  <LeftColumnTitleTable tableData={groupLesson} />
  <div class="h-[30px]" />
  <LeftColumnTitleTable tableData={mtmLesson} />
</SectionWrapper>
