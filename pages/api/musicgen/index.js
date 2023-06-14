import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "daba6434500d14d10b9865fd09c4aa9d9d9651ca68f164e99061f955a18008ac",
  (body) => {
    return {
      prompt: body.prompt
    };
  }
);

export default handler;
