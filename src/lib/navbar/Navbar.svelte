<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
  import { buildTween } from "$lib/tweens/buildTween.js";

  import Link from "$lib/navbar/NavButton.svelte";
  import LogoWrapper from "$lib/media-wrappers/LogoWrapper.svelte";
  import { scrollHeight } from "$lib/store/windowData";
  import type { NavbarContent } from "./LinkDefs";

  export let data: NavbarContent;

  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  let yShiftValue: any;
  let tweenColors: any;
  let tweenHeights = [64, 80];

  let blueTween: any = ["rgb(255,255,255)", "rgb(30,58,138)"];
  let redTween: any = ["rgb(255,255,255)", "rgb(190,18,60)"];

  if (data.color === "red") {
    tweenColors = redTween;
  }

  if (data.color === "blue") {
    tweenColors = blueTween;
  }

  let barShift = buildTween(tweenColors, 250);
  let yShift = buildTween(tweenHeights, 250);

  let index = 0;
  let scrolled: number;

  scrollHeight.subscribe((v) => {
    scrolled = v;
  });

  $: if (scrolled > 0) {
    index = 1;
  } else {
    index = 0;
  }

  $: barShift.set(tweenColors[index]);
  $: yShift.set(tweenHeights[index]);
  $: navbarData = {
    index,
    page,
    scrolled,
  };
  $: yShiftValue = $yShift;
</script>

<nav
  in:fly={{ y: -64, duration: 200, delay: 300 }}
  out:fly={{ y: -64, duration: 200 }}
  style:height={`${yShiftValue}px`}
  style:background-color={`${$barShift}`}
  class="backdrop-blur-lg
		flex 
		flex-row 
		justify-center 
		w-full 
		sticky 
		top-0 
		z-10 
		opacity-95
		{scrolled ? 'shadow-md' : ''}
		"
>
  <div
    class="flex flex-col w-full content-center justify-center place-content-center ml-3"
  >
    <div class="flex flex-row h-full place-content-around">
      <div
        class="h-full flex flex-row justify-center content-center items-center my-auto"
      >
        <LogoWrapper
          height={yShiftValue - 10}
          source={s3 + "images/TAENavLogo.svg"}
        />
        {#if scrolled}
          <div
            class="flex-col ml-5 font-bold content-center items-center justify-center md:text-md lg:text-lg xl:text-xl text-center text-white whitespace-nowrap mr-4"
          >
            <h2>Toyo Achieve English</h2>
            <h2>{data.navText}</h2>
          </div>
        {:else}
          <div
            class="flex-col ml-5 font-bold content-center items-center justify-center md:text-md lg:text-lg xl:text-xl text-center text-slate-800 whitespace-nowrap mr-4"
          >
            <h2 class="break-keep">Toyo Achieve English</h2>
            <h2>英語講座</h2>
          </div>
        {/if}
      </div>
      <div class="flex flex-row lg:pr-[50px] xl:pr-[200px] mx-5">
        {#each data.links as link}
          <Link
            {navbarData}
            linkData={link}
            color={data.color}
          />
        {/each}
      </div>
    </div>
  </div>
</nav>
