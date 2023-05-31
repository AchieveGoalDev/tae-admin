<script lang="ts">
  import { buildTween } from "$lib/tweens/buildTween";
</script>

<div class="bg-yellow-100 flex mr-auto p-2 border-l-yellow-500 border-l-[3px]">
  <h2 class="font-bold text-lg sm:text-xl lg:text-2xl">
    <slot />
  </h2>
</div>
<div class="ml-2 mt-2 italic font-bold text-md sm:text-lg lg:text-xl">
  <slot name="subheading" />
</div>
