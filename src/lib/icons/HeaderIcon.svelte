<script lang="ts">
    import "iconify-icon";

    export let icon: string;
</script>

<div
    class="
        flex 
        text-dark-dark 
        dark:text-neutral-light 
        text-2xl
        h-full 
        w-full 
        justify-center 
        items-center
        mx-auto
        my-auto
        "
>
    <iconify-icon icon={`${icon}`} />
</div>
