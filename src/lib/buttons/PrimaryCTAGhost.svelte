<script lang="ts">
    export let parameters: any;
    export let handler: any;
    export let isDisabled = false;
</script>

<button
    disabled={isDisabled}
    on:click|preventDefault={() => handler([...parameters])}
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
