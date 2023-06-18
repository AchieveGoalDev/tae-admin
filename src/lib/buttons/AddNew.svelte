<script lang="ts">
    //@ts-nocheck
    import "iconify-icon";

    export let addFunction;
</script>

<button
    on:click={() => addFunction()}
    class="
        bg-emerald-700
        hover:bg-emerald-600
        text-neutral-medium
        text-2xl
        rounded-full
        w-[2.5rem]
        h-[2.5rem]
        flex
        items-center
        justify-center
        dark:shadow-none
        dark:bg-emerald-600
        dark:hover:bg-emerald-500
        shadow-[.07rem_.15rem_.15rem_hsl(43deg_20%_60%)]
        shadow-[.1rem_.2rem_.2rem_hsl(43deg_20%_60%)]
        shadow-[.12rem_.22rem_.22rem_hsl(43deg_20%_60%)]
        hover:shadow-[.1rem_.2rem_.2rem_hsl(43deg_20%_45%)]
        active:shadow-[.05rem_.1rem_.1rem_hsl(43deg_20%_30%)]
        transition-all
        active:translate-y-[.15rem]
    "
>
    <iconify-icon icon="ph:plus-bold" />
</button>
