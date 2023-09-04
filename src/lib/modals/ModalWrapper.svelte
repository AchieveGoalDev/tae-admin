<script lang="ts">
  import { interfaceState } from "$lib/stores/interface";
  import { fade } from "svelte/transition";
  import "iconify-icon";

  import ModalError from "./ModalError.svelte";
  import UpdateSemester from "./UpdateSemester.svelte";
  import CreateTimeslot from "./CreateTimeslot.svelte";

  function keydownEscape(e: KeyboardEvent) {
    if (e.key === "Escape") {
      $interfaceState.showModal = false;
    }
  }

  let modalTitle = "エラー";

  function displayModalContents(modal: string) {
    switch (modal) {
      case "updateSemester":
        modalTitle = "学期を更新";
        return UpdateSemester;
      case "createTimeslot":
        modalTitle = "時刻表作成";
        return CreateTimeslot;
      default:
        modalTitle = "エラー";
        return ModalError;
    }
  }

  function focusModal(el: HTMLElement) {
    console.log("modal focused");
    el.focus();
    console.log(el.id);
  }

  function handleCloseModal() {
    $interfaceState.showModal = false;
  }

  let showModal = false;
  let modalToDisplay = ModalError;

  $: modalToDisplay = displayModalContents($interfaceState.modal);
  $: showModal = $interfaceState.showModal;
  $: console.log(showModal);

  //TODO
  //Implement easier navigation options
</script>

{#if showModal}
  <!--svelte-ignore--->
  <!-- use:focusModal -->
  <!-- on:keydown|preventDefault={keydownEscape} -->
  <!-- on:click={() => ($interfaceState.showModal = false)} -->
  <div
    transition:fade
    class="
            bg-dark-ultradark
            bg-opacity-70
            flex
            justify-center
            items-center
            h-full
            w-full
            absolute
            top-0
            left-0
            z-50
            cursor-auto
            shadow-lg
"
  >
    <div
      class="bg-neutral-light h-2/3 w-1/2 overflow-y-auto text-neutral-light"
    >
      <div class="w-full bg-primary-ultradark flex flex-row">
        <div
          class="flex flex-row w-full justify-center mx-auto text-2xl font-bold shadow-md"
        >
          {modalTitle}
        </div>
        <button
          class="justify-self-end transition-all hover:bg-red-700 flex-1 p-2"
          on:click={handleCloseModal}
        >
          <iconify-icon class="mx-auto my-auto" icon={"ph:x-bold"} /></button
        >
      </div>
      <svelte:component this={modalToDisplay} />
    </div>
  </div>
{/if}
