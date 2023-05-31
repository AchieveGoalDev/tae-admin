<script lang="ts">
  export let data: {
    href: string;
    color: string;
  };

  function handleEdgeStyle() {
    if (data.color === "primary") {
      return "bg-primary-dark rounded-md text-white text-2xl flex cursor-pointer mx-auto transition-all shadow-md hover:shadow:lg";
    } else if (data.color === "secondary") {
      return "bg-secondary-dark rounded-md text-white text-2xl flex cursor-pointer mx-auto transition-all shadow-md hover:shadow:lg";
    }
  }

  function handleSurfaceStyle() {
    if (data.color === "primary") {
      return "bg-primary-medium rounded-md -translate-y-1.5 border-md block p-4 transition-all hover:-translate-y-2 hover:bg-primary-meidum active:-translate-y-[2px] active:bg-primary-light";
    } else if (data.color === "secondary") {
      return "bg-secondary-medium rounded-md -translate-y-1.5 border-md block p-4 transition-all hover:-translate-y-2 hover:bg-secondary-meidum active:-translate-y-[2px] active:bg-secondary-light";
    }
  }
</script>

<a href={data.href} class={handleEdgeStyle()}>
  <span class={handleSurfaceStyle()}>
    <slot />
  </span>
</a>
