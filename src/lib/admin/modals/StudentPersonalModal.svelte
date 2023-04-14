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

<div class="flex flex-col my-4">
  <label class="font-bold mb-3">
    名前:
    <input
      on:input={(e) => handleUpdate("name", e?.target?.value)}
      class="shadow-md ml-2 p-1"
    />
  </label>
  <label class="font-bold">
    性別:
    <input
      class="shadow-md ml-2 p-1"
      on:input={(e) => handleUpdate("gender", e?.target?.value)}
    />
  </label>
  <div>
    {data.name}
    {data.gender}
  </div>
</div>
