<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  let s3 = PUBLIC_IMAGE_BUCKET_URL;

  export let question: { q: string; a: string };
</script>

<div class="bg-white rounded-lg mb-4 shadow-md md:text-2xl">
  <div class="flex flex-row mb-4 mt-3 pl-3 pr-2 py-3">
    <img src={s3 + "images/Icons/redQuestion.svg"} class="h-[40px] mr-2" alt="質問のアイコン"/>
    <p class="font-bold">
      {question.q}
    </p>
  </div>
  <hr />
  <div class="flex flex-row py-3 mb-3 bg-sky-50 pl-3 pr-2 ">
    <img src={s3 + "images/Icons/blueInfo.svg"} class="h-[40px] mr-2" alt="答のアイコン"/>
    <p>
      {question.a}
    </p>
  </div>
</div>
