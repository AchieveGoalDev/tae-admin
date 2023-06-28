import { sha256 } from 'js-sha256'

export const handler = async (event) => {
    //const origin = event.headers.origin;

    const payload = JSON.parse(event.body)

    const salt = "ACHI#TAE#DASH"

    const toHash = payload.password

    const hashed = sha256(toHash + salt)

    let resHeaders = {
        "Access-Control-Allow-Credentials": "true",
        //"Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "GET,POST, OPTIONS",
    }


    const response = {
        headers: resHeaders,
        statusCode: 200,
        body: hashed
    }

    return response
}