import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default function createApiHandler(version, inputMapper) {
  return async function handler(req, res) {
    if (!process.env.REPLICATE_API_TOKEN) {
      throw new Error(
        "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
      );
    }

    const input = inputMapper(req.body);

    const prediction = await replicate.predictions.create({
      version,
      input,
    });

    if (prediction?.error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ detail: prediction.error }));
      return;
    }

    res.statusCode = 201;
    res.end(JSON.stringify(prediction));
  };
}
