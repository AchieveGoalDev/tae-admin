<script lang="ts">
  export let imgPath = "";
  export let heading: string;
  export let altText: string;
</script>

<div
  class="max-h-96 w-full m:w-cardsmall shadow-lg sm:mx-2 rounded transition ease-in hover:scale-105 my-[50px] sm:my-4"
>
  <div
    class="flex flex-col contents-center justify-center min-h-[50px] bg-rose-700 rounded-t-md p-1"
  >
    <h2 class="text-white text-2xl font-black my-auto text-center">
      {heading}
    </h2>
  </div>
  <div class="py-2 px-3">
    <img src={imgPath} class="w-full" alt={altText} />
    <p class="text-2xl my-3">
      キャンパスの中で授業が受けられるので、授業の空き時間を有効に使って自分でスケジュールを組むことができます！
    </p>
  </div>
</div>
