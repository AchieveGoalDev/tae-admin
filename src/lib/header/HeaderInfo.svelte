<script lang="ts">
  //@ts-nocheck
  import { meta, context } from "$lib/stores/dataContext";

  import HeaderIcon from "$lib/icons/HeaderIcon.svelte";
  import Select from "$lib/forms/input/Select.svelte";
  import InvokeModal from "$lib/buttons/InvokeModal.svelte";

  $: $context = $context;
  $: console.log($context);
</script>

<header>
  <button on:click={() => console.log($context)}> Context </button>
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
            <Select bind:value={$context.selectedYear}>
              {#key $meta.years}
                {#each $meta.years as year}
                  <option value={year}>{year}</option>
                {/each}
              {/key}
            </Select>
          </span>
        </div>

        {#if $context.selectedYear}
          <Select>
            {#each $meta.semesterMetadata[$context.selectedYear] as semester}
              <option>
                {semester}
              </option>
            {/each}
          </Select>
        {/if}

        <InvokeModal modal="updateSemester" isDisabled={false}>変更</InvokeModal
        >
      </div>
    </div>
  </div>
</header>
