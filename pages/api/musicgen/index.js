import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "7a76a8258b23fae65c5a22debb8841d1d7e816b75c2f24218cd2bd8573787906",
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
