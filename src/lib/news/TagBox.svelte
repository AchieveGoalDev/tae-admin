<script lang="ts">
    import {buildTween} from '$lib/tweens/buildTween.js'
    import TagSelector from '$lib/news/TagSelector.svelte'
    import type {TagArray} from  '$lib/news/TagDefs'
    import Tag from "$lib/news/Tag.svelte"

    type Index = 1 | 0;
    
    export let tags: TagArray;
    export let checkText: string;
    export let collate: boolean;

    let tweenHeights= [45, 100]
    let yShift = buildTween(tweenHeights, 150);

    let isOpen = false;
    let index: Index = 0;
    
   
    let toUpdate: boolean = false;

    $: if (isOpen){
            index = 1;
    } else {
            index = 0;
    }
    
    $:yShift.set(tweenHeights[index])

    $:if(toUpdate){
        tags = [...tags];
        toUpdate = false;
        collate = true;
    }

    
</script>

<div style:min-height={`${$yShift}px`} class="w-full">
    <div class="flex flex-row w-full justify-between">
        <div>
            {checkText}
            <input type="checkbox" bind:checked={isOpen}>
        </div>
        {#if isOpen}
            <TagSelector tags={tags} bind:toUpdate={toUpdate}/>
        {/if}
    </div>
    {#if isOpen}
    <div class="p-2">
        {#each tags as tag}
            {#key tag.id}        
                <Tag tag={tag} bind:toUpdate={toUpdate} />
            {/key}
        {/each}
    </div>
    {/if}
</div>

