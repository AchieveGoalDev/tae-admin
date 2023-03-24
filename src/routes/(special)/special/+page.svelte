<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import { springSchool } from "$lib/events/events";

  import SectionWrapper from "$lib/wrappers/SectionWrapper.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";
  import EventPreview from "$lib/events/EventPreview.svelte";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let data;
</script>

{#if data}
  <SectionWrapper
    titleData={{ pretext: "", highlight: "学内向け", posttext: "講座" }}
    themeColor="blue"
  >
    <TextWrapper>
      全学部・全学年対象に実施をしている、 キャンパス内留学「Toyo Achieve
      English」を特別講座として、期間集中で受講をして頂けます。
      少人数のグループレッスンだから、一人一人丁寧にフォローしてもらえます。一言も話さないまま授業が終わったなんてことはありません！
      特別講座だけの、集中講座で英語力をアップしませんか。
    </TextWrapper>
  </SectionWrapper>
  <SectionWrapper
    titleData={{ pretext: "", highlight: "お申込み", posttext: "の流れ" }}
    themeColor="blue"
  >
    <TextWrapper>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, inventore
      ut. Repellendus nisi maxime consequuntur inventore! Perspiciatis, tenetur
      dolorem, sapiente minima qui id non beatae enim sed praesentium, ipsam
      voluptate.
      <div class="flex flex-row place-content-between">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </div>
    </TextWrapper>
  </SectionWrapper>
  <SectionWrapper
    titleData={{ pretext: "受講できる", highlight: "講座", posttext: "" }}
    themeColor="blue"
  >
    <TextWrapper>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, inventore
      ut. Repellendus nisi maxime consequuntur inventore! Perspiciatis, tenetur
      dolorem, sapiente minima qui id non beatae enim sed praesentium, ipsam
      voluptate.
    </TextWrapper>
    <EventPreview data={springSchool} />
  </SectionWrapper>
{/if}
