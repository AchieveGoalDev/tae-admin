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

<div class="mx-auto w-[90%] grid grid-cols-12 grid-rows-12">
  <div class="col-span-1 row-span-12 flex">
    <HeroScroller
      direction={"left"}
      {interval}
      {resetInterval}
      bind:display
      bind:cycleIndex={index}
      arraySize={imgData.length}
    />
  </div>
  <div
    class="flex flex-row bg-logo bg-center bg-no-repeat col-span-10 row-span-12"
  >
    <div class="grid grid-cols-12">
      <div class="flex flex-col justify-center contents-center col-span-6">
        <div
          class="my-auto flex flex-col justify-center contents-center p-10 rounded-md"
        >
          <h1
            class="xl:text-7xl lg:text-6xl md:text-5xl text-slate-700 text-center font-black mx-auto mb-10 drop-shadow"
          >
            Achieve English <span class="text-rose-800">Excellence</span>
          </h1>
          <HeroTextScroller {display}>
            <HeroTitle {scrollWords} cycleIndex={index} />
            <HeroText cycleIndex={index} {scrollText} />
          </HeroTextScroller>
          <div class="mx-auto">
            <CTA text="今すぐ受講" href="/apply" />
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <HeroImageCarousel
          cycleIndex={index}
          imgPaths={imgData}
          {display}
          {isMobile}
        />
      </div>
    </div>
  </div>
  <div class="col-span-1 row-span-12 flex">
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
