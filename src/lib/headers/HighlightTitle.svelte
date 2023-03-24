<script lang="ts">
  export let pretext: string;
  export let highlight: string;
  export let posttext: string;

  export let themeColor: string;

  let textColor = "black";
  let bgColor = "black";

  if (themeColor === "red") {
    textColor = "text-rose-700";
    bgColor = "bg-rose-700";
  }

  if (themeColor === "blue") {
    textColor = "text-blue-900";
    bgColor = "bg-blue-900";
  }
</script>

<div class="mx-auto mb-30">
  <div>
    <h1 class="font-bold text-4xl font-['Noto_Sans_JP'] mb-2">
      {pretext}<span class={`text-5xl font-black ${textColor}`}
        >{highlight}</span
      >{posttext}
    </h1>
  </div>
  <hr class={`h-1.5 ${bgColor}`} />
</div>
