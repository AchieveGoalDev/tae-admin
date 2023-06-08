<script lang="ts">
    import "iconify-icon";

    export let icon: string;
</script>

<div
    class="flex font-dark-dark text-4xl h-full w-full justify-center items-center"
>
    <iconify-icon icon={`${icon}`} />
</div>
