import React, { useRef, useEffect, useState } from 'react';

const ProgressBar = ({ logs = {} }) => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState("Starting…");
  const [progress, setProgress] = useState(0);
  const [seed, setSeed] = useState(null);

  const extractProgressAndSeed = (logs) => {
    const lines = logs.split('\n');
    let percentage = 0;

    lines.forEach(line => {
      if (line.startsWith("Using seed")) {
        const seedVal = line.split(' ')[2];
        setSeed(seedVal);
      }
      else if (line.includes('/')) {
        const progressVal = line.split('/')[0].trim();
        const totalVal = line.split('/')[1].trim();
        percentage = (parseInt(progressVal, 10) / parseInt(totalVal, 10)) * 100;
        if (percentage > 100) {
          percentage = 100;
        }
        setProgress(percentage);
      }
    });

    return percentage;
  };

  useEffect(() => {
    const percentage = extractProgressAndSeed(logs.musicgen)
    if (percentage === 0) {
      setStatus('Starting…');
    } else if (percentage > 0 && percentage < 100) {
      setStatus(`Generating music… (${percentage.toFixed(0)}%)`);
    } else {
      setStatus('Preparing video…');
    }
  }, [logs]);

  return (
    <div ref={containerRef}>
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-xl mb-4">
            {status}
          </span>
        </div>
        <div className="w-full bg-violet-100 rounded-full h-4">
          <div className="bg-violet-800 h-4 rounded-full" style={{ width: `${progress.toFixed(0)}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
