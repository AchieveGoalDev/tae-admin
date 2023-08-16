<script lang="ts">
    import type { Course } from "$lib/data/courseDefs";

    let toSubmit: Course = {
        createdOn: new Date(),
        updatedOn: new Date(),
        courseName: "",
        courseId: "",
        textbooks: [],
        isOnline: false,
        type: "group",
        level: "中級",
    };

    $: toSubmit = toSubmit;
    $: console.log(toSubmit.textbooks);
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
            <option>初級</option>
            <option>中級</option>
            <option>上級</option>
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
                <option selected={true}>Text1</option>
                <option>Text2</option>
                <option>Text3</option>
                <option>Text4</option>
                <option>Text5</option>
                <option>Text6</option>
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
