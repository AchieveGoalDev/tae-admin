<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import RedCtaButton from "$lib/buttons/redCtaButton.svelte";
  import LineHeading from "$lib/headers/LineHeading.svelte";
  import TextWrapper from "$lib/wrappers/TextWrapper.svelte";

  import type { EventPreview } from "$lib/events";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let data: EventPreview;
</script>

<div class="sm:mx-5 md:mx-10 bg-sky-white shadow-lg pb-5">
  <LineHeading>
    {data.heading}
    <p slot="subheading">{data.subheading}</p>
  </LineHeading>
  <TextWrapper>
    {#each data.desc as line}
      <p>{line}</p>
    {/each}
  </TextWrapper>
  <ul class="ml-5 lg:ml-10 font-bold mb-5">
    {#each data.points as point}
      <li class="flex text-2xl mb-2">
        <img
          class="h-[30px]"
          src={s3 + "images/Icons/greenCheck.svg"}
          alt="チェックアイコン"
        />
        {point}
      </li>
    {/each}
  </ul>
  <div class="flex mx-auto">
    <RedCtaButton href={data.fullPage} text="詳細はこちら" />
  </div>
</div>
