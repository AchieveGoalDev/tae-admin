<script lang="ts">
    import { fade } from "svelte/transition";

    export let showDialog: boolean;

    function keydownEscape(e: KeyboardEvent) {
        if (e.key === "Escape") {
            showDialog = false;
        }
    }

    function focusModal(el: HTMLElement) {
        console.log("modal focused");
        el.focus();
        console.log(el.id);
    }
</script>

{#if showDialog}
    <!--svelte-ignore--->
    <div
        use:focusModal
        tabindex="0"
        on:keydown|preventDefault={keydownEscape}
        on:click={() => (showDialog = false)}
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
        <div class="bg-neutral-light h-1/3 w-1/3">Sup</div>
    </div>
{/if}
