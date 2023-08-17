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
        const dbRes: SemesterDataFetch = await handleAPIDataPost("META", "GET_SEMESTER", {});
        console.log(dbRes)
        return dbRes.Item
    } catch (err) {
        console.log(err)
    }
}

export class MetaData {
    campuses: string[] | ["unset"];
    semesters: SemesterMetaData | ["unset"];

    constructor() {
        this.campuses = [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.semesters = [];
    }
}



export const meta = writable(new MetaData())
export const context = writable()
