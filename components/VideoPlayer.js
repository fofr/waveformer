import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <video src={video} controls className="w-full rounded-md" />
  );
};

export default VideoPlayer;
