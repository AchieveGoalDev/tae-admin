<script lang="ts">
    import PanelTabsWrapper from "$lib/panel/PanelTabsWrapper.svelte";
</script>

<div class="row-[span_1] col-span-full flex flex-col-reverse">
    <PanelTabsWrapper />
</div>
<div
    class="
        row-[span_23] 
        col-span-full 
        bg-primary-ultralight
        p-[1rem]
        "
>
    <slot />
</div>
