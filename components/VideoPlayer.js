import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <video src={video} controls autoplay className="w-full rounded-md" />
  );
};

export default VideoPlayer;
