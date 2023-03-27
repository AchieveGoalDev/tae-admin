<script lang="ts">
  import { appStyle } from "$lib/appData";

  export let pretext: string;
  export let posttext: string;
</script>

<div class="mx-auto mb-30">
  <div>
    <h1
      class={`font-bold 
        text-4xl 
        font-['Noto_Sans_JP'] 
        mb-2`}
    >
      {pretext}<span
        class={`text-5xl font-black ${appStyle.textColors.primary}`}
      >
        <slot />
      </span>{posttext}
    </h1>
  </div>
  <hr class={`h-1.5 ${appStyle.bgColors.primaryDark}`} />
</div>
