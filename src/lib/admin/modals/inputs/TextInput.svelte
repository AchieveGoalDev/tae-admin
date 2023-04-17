<script lang="ts">
  export let label: string;
  export let value: string;
</script>

<label class="font-bold self-center justify-self-end" for="学籍番号">
  学籍番号:
</label>
<input
  class="shadow-md ml-2 p-1 self-center justify-self-start"
  on:input={(e) => handleUpdate("number", e?.target?.value)}
  name="学籍番号"
/>
