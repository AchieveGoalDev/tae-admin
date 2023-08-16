import { handleAPIPost } from "../RESTFunctions";
import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";

import type { Course } from "$lib/data/courseDefs";

export async function createCourse(data: Course) {
    const body = {
        action: "CREATE",

        data: data
    }

    handleAPIPost(body, PUBLIC_API_GATEWAY_URL + "/semester")
}