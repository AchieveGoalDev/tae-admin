<script lang="ts">
  import { meta } from "$lib/stores/dataContext";

  let years = Object.keys($meta);
  years = years.sort();

  import HeaderIcon from "$lib/icons/HeaderIcon.svelte";
  import Select from "$lib/forms/input/Select.svelte";
  import InvokeModal from "$lib/buttons/InvokeModal.svelte";
</script>

<header>
  <div class="flex h-full items-center">
    <div
      class="
            outline
            outline-solid 4
            outline-2
            outline-dark-medium
            dark:outline-neutral-light
            bg-neutral-light
            dark:bg-dark-light
            h-[3.5rem]
            w-[3.5rem]
            rounded-full
            mr-[1.5em]
            shadow-lg"
    >
      <HeaderIcon icon="material-symbols:school" />
    </div>
    <div class="flex flex-col w-2/5">
      <div class="font-bold text-[2.488rem]">学生</div>
      <div
        class="flex text-[1.44rem] items-center w-full place-content-between"
      >
        <div>
          <span>
            <Select>
              {#each years as year}
                <option>{year}</option>
              {/each}
            </Select>
          </span>
        </div>

        <Select>
          <option>S23(春)</option>
          <option>A22(秋)</option>
        </Select>
        <InvokeModal modal="updateSemester" isDisabled={false}>変更</InvokeModal
        >
      </div>
    </div>
  </div>
</header>
