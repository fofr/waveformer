import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <video src={video} controls loop preload="auto" autoPlay className="w-full rounded-md" />
  );
};

export default VideoPlayer;
