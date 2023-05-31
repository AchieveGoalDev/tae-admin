<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import { fade } from "svelte/transition";
  import { horizontalSlide } from "$lib/transitions/transitions";

  export let displayError: boolean;
  export let errors: string[];
  export let isRequired: boolean;

  let s3 = PUBLIC_IMAGE_BUCKET_URL;
</script>

<div class="flex flex-row items-center">
  {#if isRequired && !displayError}
    <div transition:horizontalSlide>calden
      <img
        in:fade
        out:fade={{ duration: 50 }}
        src={s3 + "images/Icons/asteriskRed.svg"}
        class="h-[10px] mx-1"
        alt="必要項目のアイコン"
      />
    </div>
  {:else if isRequired && errors.length > 0}
    <div transition:horizontalSlide>
      <img
        in:fade
        out:fade={{ duration: 50 }}
        src={s3 + "images/Icons/asteriskRed.svg"}
        class="h-[10px] mx-1"
        alt="必要項目のアイコン"
      />
    </div>
  {/if}
  {#if displayError}
    {#if errors.length > 0}
      <div transition:horizontalSlide>
        <img
          in:fade
          out:fade={{ duration: 50 }}
          src={s3 + "images/Icons/errorThick.svg"}
          class="mx-1 w-[20px]"
          alt="エラー"
        />
      </div>
    {/if}
  {/if}
  {#if errors.length === 0 && displayError}
    <div transition:horizontalSlide>
      <img
        in:fade
        out:fade={{ duration: 50 }}
        src={s3 + "images/Icons/greenCheck.svg"}
        class="h-[20px] mx-1"
        alt="緑のチェック"
      />
    </div>
  {/if}
</div>    
2