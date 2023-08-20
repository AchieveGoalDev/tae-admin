import { PUBLIC_API_GATEWAY_URL } from "$env/static/public"

const apiUrl = PUBLIC_API_GATEWAY_URL + "/data"

export async function handleAPIPost(data: any, url: string) {
    try {
        const response = await fetch(url, {
            mode: "cors",
            method: "post",
            cache: "default",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })
        console.log("API call success")
        console.log(JSON.stringify(response))
        return response
    } catch (err) {
        console.log("API call error")
        console.log(err)
    }
}

export async function handleAPIDataPost(resource: string, action: string, data = {}, target: string | null = null) {

    console.log("Api data post fired")

    const requestBody = {
        resource: resource,
        action: action,
        target: target,
        data: data,
    }

    const headers = {
        "Content-Type": "application/json"
    }

    const params: RequestInit = {
        mode: "cors",
        method: "post",
        cache: "default",
        credentials: "include",
        headers,
        referrerPolicy: "no-referrer",
        body: JSON.stringify(requestBody)
    }

    try {
        const response = await fetch(apiUrl, params)
        console.log("API call success")
        console.log(JSON.stringify(response))
        return response.json()
    } catch (err) {
        console.log("API call error")
        console.log(err)
    }

}

// export async function handleAPIGet(data: any, url: string) {
//     try {
//         const response = await fetch(url, {
//             mode: "cors",
//             method: "get",
//             cache: "no-cache",
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             referrerPolicy: "no-referrer",
//             body: JSON.stringify(data)
//         })
//         console.log("API call success")
//         console.log(JSON.stringify(response))
//     } catch (err) {
//         console.log("API call error")
//         console.log(err)
//     }

// }