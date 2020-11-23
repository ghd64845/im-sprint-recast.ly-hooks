import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { searchYouTube } from "../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="parent">
        <VideoPlayer />
        <VideoList />
      </div>
    </div>
  );
};

export default App;
