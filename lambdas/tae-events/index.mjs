import DynamoDB from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/client-dynamodb"

function createGNEvent(payload) {
    let tableItem = {
        TableName: "tae-events",
        Item: marshall({
            PK: "GAKUNAI",
            SK: Date.now(),
            name: payload.name,
            date: payload.date,
            applicants: 0,
        })
    }

    return tableItem
}


export const handler = async (event) => {
    const client = new DynamoDB()
    const origin = event.headers.origin;

    let resHeaders = {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "GET,POST, OPTIONS",
    }

    const dbres = await client.putItem(createGNEvent(JSON.parse(event.body.payload)));

    const response = {
        headers: resHeaders,
        statusCode: 200,
        body: JSON.stringify(dbres)
    }

    return response
}