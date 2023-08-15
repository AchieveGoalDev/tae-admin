import { handleAPIPost } from "../RESTFunctions";
import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";

import type { SemesterData } from "$lib/data/semesterDefs";

export async function createSemester(data: SemesterData) {
    const body = {
        action: "CREATE",
        data: data
    }

    handleAPIPost(body, PUBLIC_API_GATEWAY_URL + "/semeste")
}