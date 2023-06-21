export const handler = async (event) => {
  const origin = event.headers.origin;

  console.log("Passed preflight", origin);

  const response = {
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,POST, OPTIONS",
    },

    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
