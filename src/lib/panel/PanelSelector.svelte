<script lang="ts">
    import { interfaceState } from "$lib/stores/interface";

    type ComponentList = {
        name: string;
        component: ConstructorOfATypedSvelteComponent;
        isDefaut: boolean;
    }[];

    export let components: ComponentList;
    export let panelName: string;
</script>

{#each components as component}
    {#if $interfaceState.tab[panelName] === component.name}
        <svelte:component this={component.component} />
    {:else if $interfaceState.tab[panelName] === "default" && component.isDefaut}
        <svelte:component this={component.component} />
    {/if}
{/each}
