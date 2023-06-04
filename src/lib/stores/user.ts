import { writable } from "svelte/store";

export type userData = {
    name: string,
    title: string
}

//TODO add profile image path
//TODO add enumerator for titles
//TODO add user settings

const testUser: userData = {
    name: "道間",
    title: "編集者"
}

export const user = writable(testUser)