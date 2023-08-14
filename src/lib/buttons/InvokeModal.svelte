<script lang="ts">
  import { interfaceState } from "$lib/stores/interface";

  export let modal: string;
  export let isDisabled: boolean;

  function handleInvokeModal(modal: string) {
    $interfaceState.modal = modal;
    $interfaceState.showModal = true;
  }
</script>

<button
  on:click|preventDefault={() => handleInvokeModal(modal)}
  disabled={isDisabled}
  class="
    font-bold
    p-2
    hover:text-neutral-light
    text-xl
    hover:bg-primary-ultradark
    outline outline-sold
    outline-primary-ultradark
    rounded-xl
    transition-all
    shadow-lg
    hover:scale-1.1
    hover:-translate-y-2
    "
>
  <slot />
</button>
