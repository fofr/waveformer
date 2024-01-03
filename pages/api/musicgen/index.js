import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38",
  (body) => {
    let duration = parseInt(body.duration) || 8;
    duration = Math.min(Math.max(duration, 1), 30)

    return {
      prompt: body.prompt,
      duration,
    };
  }
);

export default handler;
