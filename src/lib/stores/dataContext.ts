import { writable } from "svelte/store";
import { handleAPIDataPost } from "$lib/api/RESTFunctions";


type SemesterMetaData = {
    [key: string]: [string, string]

}

export type DataContext = {
    selectedCampus: string | null;
    selectedSemester: string | null;
    selectedYear: string | null;
}

export type MetaData = {
    campuses: string[];
    years: string[];
    semesterMetadata: SemesterMetaData | null;
}

const metaData: MetaData = {
    campuses: [],
    years: [],
    semesterMetadata: null
}

const dataContext: DataContext = {
    selectedCampus: null,
    selectedSemester: null,
    selectedYear: null
}

export async function fetchSemesterMetadata() {
    try {
        const dbRes: SemesterMetaData = await handleAPIDataPost("META", "GET_SEMESTER");

        const data = {
            //@ts-ignore: fuckattahea
            years: Object.keys(dbRes.data),
            meta: dbRes.data
        }
        return data;

    } catch (err) {
        console.log(err)
    }
}



export const meta = writable(metaData)
export const context = writable(dataContext)
