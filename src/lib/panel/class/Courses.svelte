<script lang="ts">
    import { context } from "$lib/stores/dataContext";
    import type { Course } from "$lib/data/courseDefs";
    import { user } from "$lib/stores/user";

    let toSubmit: Course = {
        createdBy: `${$user.last} ${$user.first} `,
        updateHistory: [],
        createdOn: new Date().getTime(),
        updatedOn: new Date().getTime(),
        courseName: "",
        courseId: "",
        textbooks: [],
        isOnline: false,
        type: "group",
        level: "中級",
    };

    $: toSubmit = toSubmit;
</script>

<form>
    <div class="flex flex-column py-3">
        <label for="courseName">講座名</label>
        <input name="courseName" type="text" bind:value={toSubmit.courseName} />
    </div>

    <div class="flex flex-column py-3">
        <label for="isOnline"> オンライン講座 </label>
        <input
            name="isOnline"
            type="checkbox"
            bind:checked={toSubmit.isOnline}
        />
    </div>

    <div class="flex flex-column py-3">
        <label for="level"> レベル </label>
        <select name="level" bind:value={toSubmit.level}>
            <option value="初級">初級</option>
            <option value="初中級">初中級</option>
            <option value="中級">中級</option>
            <option value="上級">上級</option>
        </select>
    </div>

    <div class="flex flex-column py-3">
        <label for="level"> スタイル </label>
        <select name="level" bind:value={toSubmit.type}>
            <option>グループ</option>
            <option>マンツーマン</option>
        </select>
    </div>
    <div class="flex flex-row">
        <div>
            <label for="textbooks">教科書選択</label>
            <select name="textbooks" multiple bind:value={toSubmit.textbooks}>
                {#if $context}
                    {#each $context.textbooks as textbook}
                        <option value={textbook.key}>{textbook.title}</option>
                    {/each}
                {/if}
            </select>
        </div>

        <div>
            <h3>Selected</h3>
            <div>
                {#each toSubmit.textbooks as textbook}
                    {textbook}
                {/each}
            </div>
        </div>
    </div>
</form>
