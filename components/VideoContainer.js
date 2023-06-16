import React, { Fragment } from 'react';
import VideoPlayer from './VideoPlayer';
import DownloadButton from './DownloadButton';
import CopyButton from './CopyButton';

const VideoContainer = ({ video, audio }) => {

  return (
    <Fragment>
      <VideoPlayer video={video} />
      <div className="grid gap-4 md:grid-cols-3 mt-4">
        <DownloadButton href={audio} text="Download audio" />
        <DownloadButton href={video} text="Download video" />
        <CopyButton text="Copy link" copiedText="Copied" />
      </div>
    </Fragment>
  );
};

export default VideoContainer;
