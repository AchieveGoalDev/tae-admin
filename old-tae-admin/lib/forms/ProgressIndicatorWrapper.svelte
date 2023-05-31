<script lang="ts">
  import { buildTween } from "$lib/tweens/buildTween";

  //gray rgb(87, 83, 78)
  //light red rgb(239, 68, 68)
  //dark red rgb(153, 27, 27)
  let outlineColor = buildTween(["rgb(0,0,0)", "rgb(255,255,255)"], 200);
  let backgroundColor = buildTween(["rgb(0,0,0)", "rgb(255,255,255)"], 200);

  let outlineW = buildTween([0, 4], 200);
  let scale = buildTween([1, 1.2], 200);

  type ProgressStatus = {
    current: number;
    latest: number;
    latestStatus: string;
    barwidth: number;
  };

  export let progress: ProgressStatus;

  export let number: number;

  function handleScale(progress: ProgressStatus) {
    if (progress.current + 1 === number) {
      return 1.2;
    } else {
      return 1;
    }
  }

  function handleBackgroundColor(progress: ProgressStatus) {
    if (progress.latestStatus === "ready" && number === progress.latest + 2) {
      return "rgb(2, 132, 199)";
    } else if (progress.current + 1 === number) {
      return "rgb(220, 38, 38)";
    } else if (progress.latest + 1 < number) {
      return "rgb(87, 83, 78)";
    } else if (
      progress.current + 1 > number &&
      progress.barwidth < number - (1 * 1) / 3
    ) {
      return "rgb(87, 83, 78)";
    } else {
      return "rgb(153, 27, 27)";
    }
  }

  //@ts-ignore
  $: backgroundColor.set(handleBackgroundColor(progress));
  $: scale.set(handleScale(progress));

  $: console.log(progress);
</script>

<div class="relative z-[5]">
  <slot name="description" />
  <div
    style:background-color={`${$backgroundColor}`}
    class="text-white text-lg sm:text-2xl rounded-full transitions-all bg-rose-800 h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex flex-col justify-center items-center shadow-md"
  >
    <slot name="number" />
  </div>
</div>
