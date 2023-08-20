<script lang="ts">
    export let value = "unset";

    function changeValue(e: Event) {
        const { target } = e;
        if (target) {
            value = (target as HTMLSelectElement).value;
        }
    }

    $: value = value;
</script>

<select
    on:change={(e) => changeValue(e)}
    class="
    bg-neutral-light
    transition-all
    rounded-md
    hover:bg-neutral-medium
    hover:cursor-pointer
    dark:bg-dark-light
    dark:hover:bg-dark-ultralight
    border-dark-dark
    p-2
    shadow-md
"
>
    <slot />
</select>
