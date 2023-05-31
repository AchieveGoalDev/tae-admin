<script lang="ts">
  import { page } from "$app/stores";
  export let linkData: {
    href: string;
    jpText: string;
    enText: string;
    icon: string;
    iconAlt: string;
  };

  import { onMount } from "svelte";

  onMount(() => {
    if (linkData.href === $page.url.pathname) {
      bg = "bg-primary-light";
    } else {
      bg = "bg-primary-medium";
    }
  });

  let bg: string = "bg-primary-medium";
  let classText: string = `block py-4 px-4 border-b-2 flex flex-row transition transition-all focus:bg-primary-light hover:bg-primary-light active:bg-primary-light ${bg}`;

  $: if (linkData.href === $page.url.pathname) {
    bg = "bg-primary-light";
  } else {
    bg = "bg-primary-medium";
  }

  console.log(linkData.href === $page.url.pathname);
</script>

<a href={linkData.href} class={classText}
  ><img
    src={linkData.icon}
    alt={linkData.iconAlt}
    class="h-[20px] mx-2"
  />{linkData.enText} | {linkData.jpText}</a
>
