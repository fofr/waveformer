import React, { useEffect, useState, useRef, Fragment } from 'react';
import Card from './Card';
import startingPrompts from '../data/starting-prompts.json';
import ProgressBar from './ProgressBar';
import VideoContainer from './VideoContainer';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const GenerateForm = () => {
  const cancelRef = useRef(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [runningPredictions, setRunningPredictions] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [audioResult, setAudioResult] = useState(null);
  const [videoResult, setVideoResult] = useState(null);
  const [areResultsReady, setAreResultsReady] = useState(false);
  const [logs, setLogs] = useState({ musicgen: '', waveform: '' });
  const [statuses, setStatuses] = useState({ musicgen: '', waveform: '' });

  useEffect(() => {
    setPrompt(startingPrompts[Math.floor(Math.random() * startingPrompts.length)]);
  }, []);

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  }

  const pollPrediction = async (id, logType) => {
    let prediction;
    setRunningPredictions((prevRunningPredictions) => [
      ...prevRunningPredictions,
      id,
    ]);

    do {
      await sleep(1000);
      const response = await fetch(`/api/${id}`);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return null;
      }

      setLogs((prevLogs) => ({
        ...prevLogs,
        [logType]: prediction.logs,
      }));

      setStatuses((prevStatuses) => ({
        ...prevStatuses,
        [logType]: `${capitalizeFirstLetter(prediction.status)}…`,
      }));
    } while (
      !cancelRef.current &&
      prediction.status !== "succeeded" &&
      prediction.status !== "canceled" &&
      prediction.status !== "failed"
    );

    setRunningPredictions((prevRunningPredictions) =>
      prevRunningPredictions.filter((runningPrediction) => runningPrediction !== id)
    );

    return prediction;
  };

  const handleNew = (e) => {
    e && e.preventDefault();
    setHasSubmitted(false);
    setAudioResult(null);
    setVideoResult(null);
    setAreResultsReady(false);
    setLogs({ musicgen: '', waveform: '' });
    setStatuses({ musicgen: '', waveform: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cancelRef.current = false;
    setHasSubmitted(true);
    const musicPrompt = e.target['music-prompt'].value;
    setPrompt(musicPrompt);

    const response = await fetch("/api/musicgen", {
      ...fetchOptions,
      body: JSON.stringify({
        prompt: musicPrompt,
        duration: e.target['duration'].value
      }),
    });

    let prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail);
      setHasSubmitted(false);
      return;
    }

    const poll = async () => {
      const result = await pollPrediction(prediction.id, 'musicgen');
      if (result && !cancelRef.current) {
        setAudioResult(result.output);
      }
    };

    await Promise.allSettled([
      poll()
    ]);

    if (!cancelRef.current) {
      setAreResultsReady(true);
    }

    cancelRef.current = false;
  };

  useEffect(() => {
    if (!areResultsReady) return;

    async function waveform () {
      const waveformResponse = await fetch("/api/waveform", {
        ...fetchOptions,
        body: JSON.stringify({
          audio: audioResult,
          prompt: prompt,
        }),
      });

      const waveformPrediction = await waveformResponse.json();
      if (waveformResponse.status !== 201) {
        setError(waveformPrediction.detail);
        return;
      }

      const waveformResult = await pollPrediction(waveformPrediction.id, 'waveform');

      if (waveformResult) {
        setVideoResult(waveformResult.output);
      } else {
        return
      }
    }

    waveform();
  }, [audioResult, areResultsReady]);

  return (
    <div>
      {!hasSubmitted && (
        <form className="w-full" onSubmit={handleSubmit}>

          <label className="block mb-4 font-bold text-2xl" htmlFor="music-prompt">
            🎸 Prompt
          </label>

          <div className="flex">
            <input
              id="prompt"
              type="text"
              rows="3"
              defaultValue={prompt}
              className="flex-grow border-2 border-gray-600 rounded-md p-2 mb-4"
              name="music-prompt"
            />

            <input
              id="duration"
              inputMode="numeric"
              defaultValue="8"
              className="w-12 border-2 border-gray-600 rounded-md p-2 mb-4 ml-4"
              name="duration"
            />
            <label className="block align-middle pt-5 ml-2 text-md" htmlFor="duration">
              seconds
            </label>
          </div>
          <div className="flex">
            <button className="block bg-violet-800 text-lg font-bold text-white w-full px-5 py-3 mt-2 rounded shadow-lg" type="submit">
              Make music
            </button>
          </div>
        </form>
      )}

      {hasSubmitted && (
        <Fragment>
          <Card>
            {!videoResult && (
              <ProgressBar logs={logs} />
            )}

            {videoResult && (
              <VideoContainer video={videoResult} audio={audioResult} />
            )}
          </Card>

          <div className="flex flex-row items-center">
            <button
              className="w-full bg-violet-800 text-white px-5 py-3 mt-2 rounded"
              onClick={handleNew}
            >
              Make more music
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default GenerateForm;
