import { passwordAuth } from './passwordAuth.mjs';

export const handler = async (event) => {
    const origin = event.headers.origin;

    const payload = JSON.parse(event.body)

    let resHeaders = {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "GET,POST, OPTIONS",
    }

    let authResponse = await passwordAuth(payload.email, payload.password)

    const response = {
        headers: resHeaders,
        statusCode: 200,
        body: JSON.stringify(authResponse)
    }

    return response
}