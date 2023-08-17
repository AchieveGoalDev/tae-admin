import { DynamoDB, UpdateItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

const mode = process.env.MODE

let table = "unset";

if (mode === "development") {
    table = "tae-data-development"
} else if (mode === "production") {
    table = "tae-data"
}

const client = new DynamoDB();
const ddbclient = new DynamoDBClient();

function parseAttribute(attribute) {

    let attributeType;

    if (Array.isArray(attribute)) {
        attributeType = "L"

        let parsedArrayItems = []

        attribute.forEach(item => {
            parsedArrayItems.push(parseAttribute(item))
        })

        console.log(JSON.stringify({ [attributeType]: parsedArrayItems }))

        return { [attributeType]: parsedArrayItems }
    } else {

        let toTest = typeof attribute

        switch (toTest) {
            case "string":
                attributeType = "S";
                break;
            case "boolean":
                attributeType = "BOOL";
                break;
            case "object":
                attributeType = "MAP";
                break;
            default:
                attributeType = "NULL";
                break;
        }

        return { [attributeType]: attribute }
    }
}

export async function runSimpleQuery(PK, SK) {
    try {
        const params = {

            TableName: table,
            Key: {
                "PK": { "S": PK },
                "SK": { "S": SK }
            }
        };

        const result = await client.getItem(params);

        return result;


    } catch (err) {
        return err;
    }
}

export async function runSimplePut(PK, SK, payload) {

    const data = {
        PK: PK,
        SK: SK,
        ...payload
    }

    try {

        const params = {
            TableName: table,
            Item: marshall(data)
        };

        const result = await client.putItem(params);
        return result;

    } catch (err) {
        return err;
    }


}

//Payload must be an object containing the key name and the attribute value
export async function runSimpleUpdate(PK, SK, payload) {

    let parsedValue = parseAttribute(payload.value)


    const params = {
        TableName: table,
        Key: {
            "PK": { "S": PK },
            "SK": { "S": SK }
        },
        ExpressionAttributeNames: {
            "#V": payload.key
        },
        ExpressionAttributeValues: {
            ':v': parsedValue,
        },
        UpdateExpression: "SET #V = :v"
    }

    console.log("update params:")
    console.log(params)

    const command = new UpdateItemCommand(params)


    try {
        const result = await ddbclient.send(command)

        console.log(result)
        return result

    } catch (err) {
        console.log(err)
        return err
    }


}
