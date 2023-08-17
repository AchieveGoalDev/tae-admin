import { writable } from "svelte/store";

export type UserData = {
    first: string,
    last: string,
    title: string
}

//TODO add profile image path
//TODO add enumerator for titles
//TODO add user settings

const testUser: UserData = {
    first: "ジャスティン",
    last: "スミス",
    title: "管理者"
}

export const user = writable(testUser)