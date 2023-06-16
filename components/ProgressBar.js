import React from 'react';

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xl">
          {`${progress}%`}
        </span>
      </div>
      <div className="w-full bg-violet-100 rounded-full h-2.5">
        <div className="bg-violet-800 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
