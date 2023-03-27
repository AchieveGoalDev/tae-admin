<script lang="ts">
  import { page } from "$app/stores";

  export let tag: string;

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", tag, {
        page_title: document.title,
        page_path: $page.url.href,
      });
    }
  }
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-P0LJSSVW5S"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", tag);
  </script>
</svelte:head>
