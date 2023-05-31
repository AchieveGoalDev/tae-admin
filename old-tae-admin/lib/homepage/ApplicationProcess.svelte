<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  let s3 = PUBLIC_IMAGE_BUCKET_URL;
</script>

<div class="flex flex-row align-items-center justify-around w-full">
  <div>
    <img src={s3 + "images/01.svg"} alt="第一の段階" />
  </div>
  <hr class="h-[10px] w-full bg-rose-700 my-auto" />
  <div>
    <img src={s3 + "images/02.svg"} alt="第二の段階" />
  </div>
  <hr class="h-[10px] w-full bg-rose-700 my-auto" />
  <div>
    <img src={s3 + "images/03.svg"} alt="第三の段階" />
  </div>
</div>
