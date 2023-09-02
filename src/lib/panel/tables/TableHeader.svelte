<script lang="ts">
  export let length: number;
</script>

<div
  style:grid-template-columns={`repeat(${length}, 1fr)`}
  class="
    grid
    p-2
		rounded-md
    font-bold
    text-lg
		text-neutral-light
    bg-primary-ultradark
"
>
  <slot />
</div>
