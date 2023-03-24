<script lang="ts">
    let oldContent = {
        weekStart: new Date("12/26/2022"),
        weekEnd: new Date("12/29/2022"),
        tasks: [
            "This is a thing I will do",
            "This is another thing I will do",
            "This is a third thing I will most certainly do beyond a shadow of a doubt"
        ]
    }
</script>

<div class=" ml-5 mr-auto p-5 rounded-md bg-white bg-opacity-70 bg backdrop-blur-sm w-1/2">
    <h1 class="text-4xl">{`先週の対応済み業務 ${oldContent.weekStart.toLocaleDateString('jp-JP')} - ${oldContent.weekEnd.toLocaleDateString('jp-JP')}`}</h1>
    <hr>
        <ul class="list-disc list-outside mt-5 pl-8">
            {#each oldContent.tasks as task}
            <li class="text-2xl my-1">{task}</li>
            {/each}
        </ul>
</div>