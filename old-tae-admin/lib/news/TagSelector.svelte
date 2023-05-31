<script lang="ts">
    import {fly} from 'svelte/transition'
    import type {Tag, TagArray} from  '$lib/news/TagDefs'
    import {slide} from 'svelte/transition'
    
    export let toUpdate: boolean
    export let tags: TagArray

    let currentSelection: number;    

    function select(){
        for (let i = 0; i < tags.length; i++){
            if(tags[i].id === currentSelection){
                tags[i].toggleIsSelected()
            }
        }

        toUpdate = true
    }

</script>

{#if !toUpdate}
<div transition:fly="{{y:10, duration: 150, delay:100}}" >
    <div class="flex flex-row">
        <select class="hover:cursor-pointer border-2 border-black min-w-[200px] bg-slate-100 p-1" bind:value={currentSelection}>
            {#each tags as tag}
                {#key tag.id}
                    {#if !tag.isSelected}
                        <option value={tag.id}>{tag.text}</option>
                    {/if}
                {/key}
            {/each}
        </select>
        <div class="p-2 rounded-sm bg-white text-black border-2 border-black transition ease-in-out hover:bg-black hover:text-white font-bold mx-2" on:click={select}>追加</div>
    </div>
</div>
{/if}