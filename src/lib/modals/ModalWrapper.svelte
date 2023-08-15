<script lang="ts">
  import { interfaceState } from "$lib/stores/interface";
  import { fade } from "svelte/transition";

  import ModalError from "./ModalError.svelte";
  import UpdateSemester from "./UpdateSemester.svelte";

  function keydownEscape(e: KeyboardEvent) {
    if (e.key === "Escape") {
      $interfaceState.showModal = false;
    }
  }

  function displayModalContents(modal: string) {
    switch (modal) {
      case "updateSemester":
        return UpdateSemester;
      default:
        return ModalError;
    }
  }

  function focusModal(el: HTMLElement) {
    console.log("modal focused");
    el.focus();
    console.log(el.id);
  }

  function handleCloseModal() {
    console.log("click");
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
    <div class="bg-neutral-light h-2/3 w-1/2 overflow-y-auto">
      <button on:click={handleCloseModal}>close</button>
      <svelte:component this={modalToDisplay} />
    </div>
  </div>
{/if}
