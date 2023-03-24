<script lang="ts">
  import type { NavbarData } from "./NavTypes.svelte";
  import type { LinkData } from "./LinkDefs";

  export let linkData: LinkData;
  export let navbarData: NavbarData;
  export let color: string;

  let bgColor = "bg-black";
  let hoverColor = "hover:bg-rose-600";

  if (color === "red") {
    bgColor = "bg-rose-600";
  }
  if (color === "blue") {
    bgColor = "bg-blue-700";
    hoverColor = "hover:bg-blue-600";
  }

  let hovered: boolean = false;
  let page = navbarData.page;
</script>

{#if $page.url.pathname === linkData.href}
  <a
    on:mouseover={() => (hovered = true)}
    on:focus={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:blur={() => (hovered = false)}
    style:font-weight={navbarData.index === 0 ? "200" : "bold"}
    style:color="white"
    class={`h-full sm:text-sm md:text-md lg:text-lg xl:text-xl mx-1  text-center font-bold px-2 lg:px-4 scale-105 flex shadow-md break-keep ${bgColor}`}
    href={linkData.href}
    data-sveltekit-reload={linkData.reload ? "" : "off"}
  >
    <div class="my-auto">
      <div>
        {linkData.jpText}
      </div>
      <hr class="bg-white border-none h-[2px] opacity-95" />
      <div>{linkData.enText}</div>
    </div>
  </a>
{:else}
  <a
    on:mouseover={() => (hovered = true)}
    on:focus={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:blur={() => (hovered = false)}
    style:font-weight={navbarData.index === 0 ? "200" : "bold"}
    style:color={hovered ? "white" : navbarData.scrolled ? "white" : "black"}
    class={`h-full md:text-sm lg:text-md xl:text-lg text-center font-bold px-2 md:px-4 transition ease-in hover:cursor-pointer hover:scale-105 hover: flex break-keep ${hoverColor}`}
    href={linkData.href}
    data-sveltekit-reload={linkData.reload ? "" : "off"}
  >
    <div class="my-auto">
      <div>
        {linkData.enText}
      </div>
      <hr
        style:background-color={hovered
          ? "white"
          : navbarData.scrolled
          ? "white"
          : "black"}
        class="border-none h-[1px] opacity-95"
      />
      <div>{linkData.jpText}</div>
    </div>
  </a>
{/if}
