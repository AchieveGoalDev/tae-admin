import { writable } from "svelte/store";
import { handleAPIDataPost } from "$lib/api/RESTFunctions";




export type DataContext = {
    selectedCampus: string;
    selectedSemester: string;
}

export class MetaData {
    campuses: string[] | void;
    semesters: string[] | void;

    constructor(campuses: string[] = [], semesters: string[] = []) {
        this.campuses = campuses;
        this.semesters = semesters;
    }

    async fetchSemesterMetadata() {
        try {
            const dbRes = await handleAPIDataPost("META", "GET_SEMESTER", {});
            this.semesters = dbRes;
        } catch (err) {
            console.log(err)
        }
    };
}



export const meta = writable(new MetaData())
export const context = writable()
