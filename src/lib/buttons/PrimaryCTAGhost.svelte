<script lang="ts">
    function defaultHandler() {
        console.log("click");
    }

    export let handler = defaultHandler;
    export let isDisabled = false;
</script>

<button
    disabled={isDisabled}
    on:click|preventDefault={() => handler}
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
