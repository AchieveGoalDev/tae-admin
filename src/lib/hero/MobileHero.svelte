<script lang="ts">
  import { PUBLIC_BUCKET_URL } from "$env/static/public";
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import HeroText from "$lib/hero/HeroText.svelte";
  import HeroTextScroller from "$lib/hero/HeroTextScroller.svelte";
  import HeroImageCarousel from "$lib/hero/HeroImageCarousel.svelte";
  import HeroTitle from "$lib/hero/HeroTitle.svelte";
  import HeroScroller from "$lib/hero/HeroScroller.svelte";

  import CTA from "$lib/buttons/redCtaButton.svelte";

  export let isMobile: boolean;

  let url = PUBLIC_BUCKET_URL;
  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  let scrollWords = [
    "全キャンパスで",
    "オンラインでも",
    "毎日受講可",
    "受講スタイル",
    "お得な値段で",
  ];

  let scrollText = [
    "Toyo Achieve Englishは全キャンパスで開講中。空きコマに受講出来るので、時間を有効活用できます。",
    "Toyo Achieve Englishのクオリティの高い授業はご自宅でも受講可能！帰宅後や外出前に受講出来ます。",
    "グループレッスンは平日毎日、マンツーマンでも週に5コマまで受講可能。毎日英語を話すことによって、会話力が向上します。",
    "マンツーマンとグループレッスン、自分に合った受講スタイルで、英語力がぐんぐん伸びる！",
    "グループは1コマ850円、マンツーマンは3,500円と非常にお得に受講出来ます。リピーター受講生はさらに受講料20％オフ！",
  ];

  let imgData = [
    {
      path: s3 + "images/hero/AllCampus.png",
      alt: "毎日",
      size: "h-[480px] xxl:h-[720px]",
    },
    {
      path: s3 + "images/hero/OnlineHero1080.webp",
      alt: "毎日",
      size: "h-[480px] xxl:h-[720px]",
    },
    {
      path: s3 + "images/hero/Everyday1080.webp",
      alt: "毎日",
      size: "h-[550px] xxl:h-[720px]",
    },
    {
      path: s3 + "images/hero/Style1080.webp",
      alt: "joy",
      size: "h-[550px] xxl:h-[720px]",
    },
    {
      path: s3 + "images/hero/Reasonable1080.webp",
      alt: "teach",
      size: "h-[550px] xxl:h-[720px]",
    },
  ];

  let display = true;
  $: index = 0;

  const cycler = () => {
    display = false;

    if (index >= scrollWords.length - 1) {
      index = 0;
    } else index++;

    setTimeout(() => (display = true), 750);
  };

  function resetInterval(toReset: number) {
    clearInterval(toReset);
    return setInterval(cycler, 7500);
  }

  let interval: any;
  $: interval = resetInterval(interval);
</script>

<svelte:head>
  {#each imgData as image}
    <link rel="preload" as="image" href={image.path} />
  {/each}
</svelte:head>

<div class="mobile-hero-container bg-logo-mobile mt-4">
  <div class="mobile-hero-carousel grid grid-cols-8 content-center gap-0">
    <div class="col-span-1 flex">
      <HeroScroller
        direction={"left"}
        bind:interval
        {resetInterval}
        bind:display
        bind:cycleIndex={index}
        arraySize={imgData.length}
      />
    </div>
    <div class="col-start-2 col-end-8 colspan-6 ">
      <div class="mx-auto">
        <HeroImageCarousel
          cycleIndex={index}
          imgPaths={imgData}
          {display}
          {isMobile}
        />
      </div>
    </div>
    <div class="col-start-8 flex">
      <HeroScroller
        direction={"right"}
        bind:interval
        {resetInterval}
        bind:display
        bind:cycleIndex={index}
        arraySize={imgData.length}
      />
    </div>
  </div>
  <div class="mobile-hero-text">
    <HeroTextScroller {display}>
      <HeroTitle {scrollWords} cycleIndex={index} />
      <div
        class="bg-slate-500/[.1] flex mx-auto my-auto p-4 rounded-lg shrink mx-5"
      >
        <HeroText cycleIndex={index} {scrollText} />
      </div>
    </HeroTextScroller>
  </div>
</div>
