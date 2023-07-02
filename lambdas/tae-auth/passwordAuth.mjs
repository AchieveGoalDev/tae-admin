import { DynamoDB, GetItemCommand } from "@aws-sdk/client-dynamodb"

export async function passwordAuth(email, password) {

    console.log('password:')
    console.log(password)

    const client = new DynamoDB()
    const errorMessage = "Error: email or password is incorrect"

    try {

        const params = {

            TableName: "tae-admin-users",
            Key: {
                "PK": { "S": "USER" },
                "email": { "S": email }
            }
        }

        const result = await client.getItem(params)


        if (result.Item.password.S !== password) {
            console.log("Wrong password")
            console.log(result.Item)
            return errorMessage
        }

        if (result.Item === undefined) {
            console.log("Password not found")
            console.log(result)
            return errorMessage
        }

        return "authenticated"

    } catch (err) {
        return err
    }
}

