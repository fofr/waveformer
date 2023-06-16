import createApiHandler from "../api-handler";

const handler = createApiHandler(
  "116cf9b97d0a117cfe64310637bf99ae8542cc35d813744c6ab178a3e134ff5a",
  (body) => {
    return {
      audio: body.audio,
      caption_text: body.prompt
    };
  }
);

export default handler;
