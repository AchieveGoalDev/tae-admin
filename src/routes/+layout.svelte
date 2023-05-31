<script>
    import "../app.css";
    import SideNav from "$lib/navigation/SideNav.svelte";
</script>

<div class="grid gap-x-1 gap-y-0 grid-cols-12 h-[100vh] bg-slate-100">
    <div class="col-span-2 h-full">
        <SideNav />
    </div>
    <div class="col-span-10 h-full pt-[1rem] pb-[2rem]">
        <div
            class="grid grid-cols-12 mx-[2rem] grid-rows-[repeat(24,.3fr)] h-full"
        >
            <div class="flex flex-col col-start-1 col-end-3 row-[span_1]">
                <div class="font-bold text-[2.488rem]">学生</div>
                <div class="flex w-full place-space-around text-[1.44rem]">
                    <div>秋学期 - 2023</div>
                    <select>
                        <option>S23</option>
                        <option>A22</option>
                    </select>
                    <button>変更</button>
                </div>
            </div>
            <div class="flex col-start-8 col-end-12">userdata</div>
            <div class="col-span-12 row-[span_23]">
                <div
                    class="h-full grid grid-rows-[repeat(24, 1fr)] grid-cols-12"
                >
                    <div
                        class="row-[span_1] col-span-full flex flex-col-reverse"
                    >
                        <div class="flex">
                            <div
                                class="bg-primary-ultralight p-[.5rem] mr-[.5rem]"
                            >
                                Tab1
                            </div>

                            <div
                                class="bg-primary-light p-[.5rem] mr-[.5rem] shadow-inner"
                            >
                                Tab2
                            </div>

                            <div
                                class="bg-primary-light p-[.5rem] mr-[.5rem] shadow-inner"
                            >
                                Tab3
                            </div>
                        </div>
                    </div>
                    <div
                        class="row-[span_23] col-span-full bg-primary-ultralight"
                    >
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
