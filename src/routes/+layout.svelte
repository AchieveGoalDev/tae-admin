<script lang="ts">
  import "../../app.css";
  import Navbar from "$lib/navbar/Navbar.svelte";
  import Hamburger from "$lib/navbar/mobile/Hamburger.svelte";
  import Social from "$lib/social-components/social.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { windowWidth, scrollHeight } from "$lib/store/windowData";

  import { mainNav } from "$lib/navbar/LinkDefs";
  import PageTransition from "$lib/transitions/PageTransition.svelte";

  let width: number;
  let scroll: number;

  export let data: any;

  $: windowWidth.update((v) => {
    return width;
  });

  $: scrollHeight.update((v) => {
    return scroll;
  });
</script>

<svelte:window bind:innerWidth={width} bind:scrollY={scroll} />

{#if width > 900}
  <Navbar data={mainNav} />
{:else if width <= 900}
  <Hamburger data={mainNav} />
{/if}
<PageTransition url={data.pathname}>
  <main
    id="standard"
    class="flex flex-col justify-center pb-5 w-2xl bg-white mx-auto px-3 shadow-md col-span-full row-span-full"
  >
    <slot />
    <Social />
  </main>
</PageTransition>

<footer class="w-full flex flex-col justify-center content-center">
  <div class="min-h-[300px] bg-rose-700">
    <Footer themeColor="red" />
  </div>
  <div class="bg-slate-700 text-white w-full">
    <p class="mx-auto w-fit py-2">
      © Achievegoal Co.,Ltd. All rights reserved.
    </p>
  </div>
</footer>
