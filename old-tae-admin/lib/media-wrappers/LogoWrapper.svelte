<script lang="ts">
  export let height: number;
  export let source: string;
</script>

<img
  class="h-full bg-white rounded-full p-1 ml-5 my-2"
  style:height={`${height}px`}
  src={source}
  alt="東洋アチーブイングリッシュのロゴ"
/>
