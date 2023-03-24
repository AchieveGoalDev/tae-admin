<script lang="ts">
  export let data: {
    href: string;
    color: string;
  };
</script>

<a
  href={data.href}
  class={`${
    data.color === "blue"
      ? "bg-color-sky-700 hover:bg-sky-600 focus:bg-rose-600 "
      : ""
  } 
  ${
    data.color === "red"
      ? "bg-rose-700 hover:bg-rose-600 focus:bg-sky-600 "
      : ""
  }
  inline-block
  rounded-md
  mx-auto
  font-bold
  text-white
  p-4
  my-5
  transition-all
  hover:-translate-y-2
  hover:scale-105
  `}
>
  <slot />
</a>
