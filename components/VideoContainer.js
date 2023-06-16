import React, { Fragment } from 'react';
import VideoPlayer from './VideoPlayer';
import DownloadButton from './DownloadButton';

const VideoContainer = ({ video, audio }) => {

  return (
    <Fragment>
      <VideoPlayer video={video} />
      <div className="grid gap-4 grid-cols-2 mt-4">
        <DownloadButton href={audio} text="Download audio" />
        <DownloadButton href={video} text="Download video" />
      </div>
    </Fragment>
  );
};

export default VideoContainer;
