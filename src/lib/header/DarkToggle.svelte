<script lang="ts">
  import { tweened } from "svelte/motion";
  import { quintOut } from "svelte/easing";

  let toggled: boolean = false;
  const buttonPos = tweened(0, { duration: 35, easing: quintOut });

  $: if (toggled) {
    document.documentElement.classList.add("dark");
    buttonPos.set(24);
  } else if (!toggled) {
    buttonPos.set(0);
    document.documentElement.classList.remove("dark");
  }
</script>

<button
  class="
    rounded-full
    w-[3rem] 
    h-[1.5rem]
    outline
    outline-solid
    outline-1
    outline-primary-dark
    dark:outline-neutral-light
    p-[2px]
    m-5
    relative
    bg-neutral-light
    dark:bg-dark-dark
    shadow-lg
    "
  on:click={() => (toggled = !toggled)}
>
  <div
    style:transform={`translateX(${$buttonPos}px)`}
    class="rounded-full h-[1.2rem] w-[1.2rem] bg-primary-dark transition-all hover:bg-primary-ultradark dark:bg-neutral-light dark:hover:bg-primary-ultralight shadow-lg"
  /></button
>
