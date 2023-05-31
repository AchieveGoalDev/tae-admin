<script lang="ts">
  import AddItem from "$lib/admin/buttons/AddItem.svelte";

  function log(thing: string) {
    console.log(thing);
  }

  const data = "hello";
</script>

<div class="flex flex-col h-full mx-auto text-center relative">
  <div class="content-center justify-center my-auto">
    <p class="text-primary-dark text-3xl font-black">作成中</p>
    <p class="mt-2">この機能は只今アクセス出来ません。</p>
  </div>
  <AddItem handleAdd={log} {data} alt={data} />
</div>
