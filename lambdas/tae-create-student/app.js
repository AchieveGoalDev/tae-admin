const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

export const handler = async (event) => {
  const client = new DynamoDB();
  const origin = event.headers.origin;

  console.log("Passed preflight", origin);

  const dbres = await client.putItem(createItem(JSON.parse(event.body)));

  const response = {
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,POST, OPTIONS",
    },

    statusCode: 200,
    body: JSON.stringify(dbres),
  };
  return response;
};

function createItem(data) {
  let item = {
    TableName: "tae-test",
    Item: marshall({
      PK: "STUDENT",
      SK: data.name,
      name: data.name,
      gender: data.gender,
    }),
  };

  return item;
}
