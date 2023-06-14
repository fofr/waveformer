import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const predictionHandler = async function handler(req, res) {
  const action = req.query.action;
  let prediction;

  if (action === "cancel") {
    prediction = await replicate.predictions.cancel(req.query.id);
  } else {
    prediction = await replicate.predictions.get(req.query.id);
  }

  if (prediction?.error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: prediction.error }));
    return;
  }

  res.end(JSON.stringify(prediction));
};

export default predictionHandler;
