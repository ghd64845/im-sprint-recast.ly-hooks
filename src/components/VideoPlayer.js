import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/"
          allowFullScreen
        />
      </div>
      <div className="video-player-details">
        <h3>title</h3>
        <div>description</div>
      </div>
    </div>
  );
};
export default VideoPlayer;
