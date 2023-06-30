<script lang="ts">
    import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";
    import { fly } from "svelte/transition";

    import { handleAPIPost } from "$lib/api/RESTFunctions";
    import PrimaryCtaGhost from "$lib/buttons/PrimaryCTAGhost.svelte";

    let registerUserEndpoint = "/register";

    type NewUser = {
        firstName: string | null;
        lastName: string | null;
        email: string | null;
        role: string | null;
        password: string | null;
    };

    const userData: NewUser = {
        firstName: null,
        lastName: null,
        email: null,
        role: null,
        password: null,
    };

    let errors: any;

    function validateUserData(data: NewUser) {
        let errors: any = [];
        let isValid: boolean;
        let values = Object.values(data);
        let keys = Object.values(data);

        values.forEach((value, i) => {
            if (value === null) {
                isValid = false;
                errors.push([keys[i], value]);
            }
        });

        return errors;
    }

    $: errors = validateUserData(userData);
</script>

<dialog
    in:fly={{ y: 50, duration: 1000 }}
    class="bg-gradient-to-b from-stone-50 to-stone-100 w-1/3 h-2/3 grid grid-rows-3 grid-cols-1 shadow-lg"
>
    <div class="row-span-1 flex items-center justify-center">
        <h3 class="text-3xl font-bold">新規ユーザー登録</h3>
    </div>
    <div class="grid grid-cols-2">
        <div class="col-start-1 justify-end flex">
            <label class="font-bold mr-2 text-lg" for="苗字">苗字</label>
        </div>
        <div class="col-start-2">
            <input
                class="shadow-md"
                name="苗字"
                bind:value={userData.lastName}
            />
        </div>

        <div class="col-start-1 justify-end flex">
            <label class="font-bold mr-2 text-lg" for="名前">名前</label>
        </div>
        <div class="col-start-2">
            <input
                class="shadow-md"
                name="名前"
                bind:value={userData.firstName}
            />
        </div>

        <div class="col-start-1 justify-end flex">
            <label class="font-bold mr-2 text-lg" for="メール">メール</label>
        </div>
        <div class="col-start-2">
            <input
                class="shadow-md"
                name="メール"
                bind:value={userData.email}
            />
        </div>

        <div class="col-start-1 justify-end flex">
            <label class="font-bold mr-2 text-lg" for="password"
                >パスワード</label
            >
        </div>
        <div class="col-start-2">
            <input
                class="shadow-md"
                name="パスワード"
                bind:value={userData.password}
            />
        </div>

        <PrimaryCtaGhost
            handler={handleAPIPost(
                userData,
                PUBLIC_API_GATEWAY_URL + registerUserEndpoint
            )}
            isDisabled={errors.length > 0}
        />
    </div>
    {JSON.stringify(errors)}
</dialog>
