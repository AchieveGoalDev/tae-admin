<script lang="ts">
    import { context, fetchTextData } from "$lib/stores/dataContext";
    import { user } from "$lib/stores/user";
    import type { Textbook } from "$lib/data/textDefs";
    import { handleAPIDataPost } from "$lib/api/RESTFunctions";
    import TableHeader from "$lib/panel/tables/TableHeader.svelte";
    import TableRow from "$lib/panel/tables/TableRow.svelte";
    import TableCell from "$lib/panel/tables/TableCell.svelte";
    import HeaderCell from "$lib/panel/tables/HeaderCell.svelte";

    let text: Textbook = {
        title: null,
        level: null,
        key: null,
        createdOn: new Date().valueOf(),
        updatedOn: new Date().valueOf(),
        createdBy: `${$user.last} ${$user.first}`,
        updateHistory: [],
    };

    let triggerRefresh = false;
    let levels = ["初級", "初中級", "中級", "上級"];

    function submitData() {
        handleAPIDataPost("TEXT", "CREATE", text);
        triggerRefresh = true;
    }

    async function refreshTextData(trigger: boolean) {
        const fetchedData = await fetchTextData();
        if (fetchedData) {
            $context.textbooks = fetchedData.data;
        }

        return !trigger;
    }

    //@ts-ignore
    $: triggerRefresh = refreshTextData(triggerRefresh);
    $: text = text;
</script>

<div>
    <form>
        <div>
            <label for="title">Title</label>
            <input name="title" type="text" bind:value={text.title} />
        </div>
        <div>
            <label for="key">Key</label>
            <input name="key" type="text" bind:value={text.key} />
        </div>
        <div>
            <label for="level">Level</label>
            <select bind:value={text.level}>
                {#each levels as level}
                    <option value={level}>
                        {level}
                    </option>
                {/each}
            </select>
        </div>
        <button on:click|preventDefault={submitData}>Submit</button>
    </form>

    <div class="flex flex-col mx-auto w-2/3 bg-neutral-ultralight">
        {#key triggerRefresh}
            {#if $context.textbooks}
                <TableHeader length={3}>
                    <HeaderCell>タイトル</HeaderCell>
                    <HeaderCell>テキストコード</HeaderCell>
                    <HeaderCell>対象レベル</HeaderCell>
                </TableHeader>
                {#each $context.textbooks as text, i}
                    <TableRow length={3} index={i}>
                        <TableCell>{text.title}</TableCell>
                        <TableCell>{text.key}</TableCell>
                        <TableCell>{text.level}</TableCell>
                    </TableRow>
                {/each}
            {/if}
        {/key}
    </div>
</div>
