<script lang="ts">
  import { Personal } from "../data/application";
  import { student } from "../editData";

  let data = new Personal();

  function handleUpdate(key: string, value: Event) {
    data[key] = value;
  }

  function writeToStore(data: Personal) {
    $student = data;
  }

  $: writeToStore(data);
  $: console.log($student);
</script>

<div class="grid grid-cols-2 my-4　gap-y-0.5">
  <label class="font-bold self-center justify-self-end" for="学籍番号">
    学籍番号:
  </label>
  <input
    class="shadow-md ml-2 p-1 self-center justify-self-start"
    on:input={(e) => handleUpdate("number", e?.target?.value)}
    name="学籍番号"
  />
  <label class="font-bold self-center" for="性別"> 性別: </label>
  <input
    class="shadow-md ml-2 p-1 mb-3 self-start"
    on:input={(e) => handleUpdate("gender", e?.target?.value)}
    name="性別"
  />

  <label class="font-bold mb-3">
    名前:
    <input
      on:input={(e) => handleUpdate("name", e?.target?.value)}
      class="shadow-md ml-2 p-1"
    />
  </label>
  <label class="font-bold mb-3">
    :
    <input
      on:input={(e) => handleUpdate("name", e?.target?.value)}
      class="shadow-md ml-2 p-1"
    />
  </label>
  <div>
    {data.name}
    {data.gender}
  </div>
</div>
