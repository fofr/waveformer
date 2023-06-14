import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "89d3082a1055872f519b7f5b2b3777dfb8203cc8005da0f6cd8535d635022f54",
  (body) => {
    return {
      audio: body.audio,
      caption_text: body.prompt
    };
  }
);

export default handler;
