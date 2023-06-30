import { createHash } from "node:crypto"

function sha256(toEncrypt, salt){
    createHash('sha3-256').update(toEncrypt + salt).digest('hex')
}

export const handler = async (event) => {
    const origin = event.headers.origin;

    const hashed = sha256(event.password + process.env.SALT)

    let resHeaders = {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": origin,
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