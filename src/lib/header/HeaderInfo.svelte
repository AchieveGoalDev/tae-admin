<script lang="ts">
    import HeaderIcon from "$lib/icons/HeaderIcon.svelte";
</script>

<header>
    <div class="flex h-full items-center">
        <div
            class="outline outline-solid outline2- outline-dark-medium bg-neutral-light h-[3.5rem] w-[3.5rem] rounded-full mr-[1.5em] shadow-lg"
        >
            <HeaderIcon icon="material-symbols:school" />
        </div>
        <div class="flex flex-col">
            <div class="font-bold text-[2.488rem]">学生</div>
            <div class="flex text-[1.44rem]">
                <div>秋学期 - 2023</div>
                <select>
                    <option>S23</option>
                    <option>A22</option>
                </select>
                <button>変更</button>
            </div>
        </div>
    </div>
</header>
