<script lang="ts">
  import type { TestimonialProfile } from "$lib/testimonials/TestimonialData";
  export let data: TestimonialProfile;
</script>

<div>
  <div
    class="flex flex-row place-content-center bg-orange-50 border-2 border-rose-800 items-center"
  >
    <img src={data.img} alt={data.imgAlt} class="h-[100px] sm:h-[150px] m-4" />
    <div class="flex flex-col place-content-around text-lg sm:text-xl my-auto">
      <div>
        <span class="font-bold">氏名：</span><span>{data.name}</span>さん
      </div>
      <div>
        <span class="font-bold">学部：</span><span>経営学部２年</span>
      </div>
      <div>
        <span class="font-bold">受講コース：</span><span>{data.course}</span>
      </div>
      <div>
        <span class="font-bold">学習成果：</span><span>{data.results}</span>
      </div>
    </div>
  </div>
  <div class="text-xl p-5">
    {#each data.fullQuote as quote}
      <p class="my-1">
        {quote}
      </p>
    {/each}
  </div>
</div>
