import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "2c56751d7f8642caf84cc64ec583c70087ac5ed90b27ca0005d00ff1be505417",
  (body) => {
    return {
      prompt: body.prompt
    };
  }
);

export default handler;
