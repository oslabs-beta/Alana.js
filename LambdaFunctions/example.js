exports.handler = async (event, context) => {
  console.log('hello!', event);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from NPM Lambda function created with ALANA.js!'),
  };
  return response;
};
