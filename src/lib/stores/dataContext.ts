import { writable } from "svelte/store";
import { handleAPIDataPost } from "$lib/api/RESTFunctions";

type SemesterDataFetch = {
    Item: SemesterMetaData
}

type SemesterMetaData = {
    [key: string]: [string, string]
}

export type DataContext = {
    selectedCampus: string;
    selectedSemester: string;
}

export async function fetchSemesterMetadata() {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const dbRes: any = await handleAPIDataPost("META", "GET_SEMESTER");
        console.log(dbRes)
        return dbRes.body
    } catch (err) {
        console.log(err)
    }
}

export type MetaData = {
    campuses: string[];
    semesters: string[];
}

const metaData: MetaData = {
    campuses: [],
    semesters: []
}


export const meta = writable(metaData)
export const context = writable()
