<script lang="ts">
  let cells = ["講座名", "開催日", "申込者", "講座の詳細"];
</script>

<div
  style:grid-template-columns={`repeat(${cells.length}, 1fr)`}
  class="
		rounded-md
		my-2
		grid
    p-2
    text-lg
		text-neutral-light
    font-bold
    bg-primary-ultradark
"
>
  {#each cells as cell}
    <p class="grid col-span-1 justify-center">{cell}</p>
  {/each}
</div>
