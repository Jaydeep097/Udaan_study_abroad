import React from 'react';
import './VideoPlayer.css';
import video from '../../assets/videos.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const handleClose = (e) => {
    // Close the video player if the click is outside the video element
    if (e.target.classList.contains('video-player')) {
      setPlayState(false);
    }
  };

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} onClick={handleClose}>
      <video src={video} autoPlay muted controls controlsList="nodownload"></video>
    </div>
  );
}

export default VideoPlayer;