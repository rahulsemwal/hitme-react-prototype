exports.handler = async (event, context) => {
    const { name = "Anonymous" } = event.queryStringParameters;
    console.log("RAHUL:", event, context);
    return {
      statusCode: 200,
      body: `Hello, ${name}`
    };
  };