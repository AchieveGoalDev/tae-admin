<script lang="ts">
    let user ={
        name: "島崎瑛之",
        dept: "経営企画部",
        title: "",

    }
</script>

<div class="inline-block select-none">
    <div class="text-6xl flex flex-row shadow-lg rounded-full m-5 bg-rose-700 items-center">
        <div class="rounded-full border border-rose-700  border-8">
            <img src="/plan/島崎.jpg" class="rounded-full max-h-[150px] shadow-2xl" alt="島崎"/>
        </div>
        <p class="px-3 mr-20 text-white">
            <span class="text-5xl font-bold">
                {user.dept}
                -    
            </span>
            <span>
                {user.name}
            </span>
            {#if user.title}
            <span>
                {user.title}
            </span>
            {/if}
        </p>
    </div>
</div>