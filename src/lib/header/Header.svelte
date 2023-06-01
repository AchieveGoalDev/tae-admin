<script lang="ts">
    import HeaderInfo from "$lib/header/HeaderInfo.svelte";
    import UserInfo from "$lib/header/UserInfo.svelte";

    //TODO handle login state data in store
    export let logged: boolean;
</script>

<header class="grid grid-cols-2">
    <div class="flex flex-col col-start-1 col-span-1">
        <HeaderInfo />
    </div>
    <div class="col-start-2 col-span-1">
        <UserInfo bind:logged />
    </div>
</header>
