import { PUBLIC_API_GATEWAY_URL } from "$env/static/public";

enum EventGetTypes {
    gakunai = "GAKUNAI",
    gakugaiAdults = "GAKUGAI:ADULTS",
    gakugaiKids = "GAKUGAI:KIDS"
}

export async function getEventData() {
    try {
        const response = await fetch(PUBLIC_API_GATEWAY_URL + "/events"){

        }
    } catch (err) {
        console.log(`Fetch error: ${err}`)
    }

}