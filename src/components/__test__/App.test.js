import React from "react";
import App from "../App";
import VideoList from "../VideoList";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { fakeData } from "./fakeData";
import VideoPlayer from "../VideoPlayer";
configure({ adapter: new Adapter() });

describe("App", () => {
  let wrap;

  beforeEach(() => {
    wrap = mount(<App searchYouTube={() => {}} />);
  });

  test("함수형 컴포넌트로 작성되어야 합니다", () => {
    expect(React.Component.isPrototypeOf(App)).toBeFalsy();
  });

  test("하나의 VideoPlayer 컴포넌트를 포함합니다", () => {
    expect(wrap.find(VideoPlayer).length).toBe(1);
  });

  test("하나의 VideoList 컴포넌트를 포함합니다", () => {
    expect(wrap.find(VideoList).length).toBe(1);
  });

  test("VideoListEntry의 제목을 클릭하면, VideoPlayer의 비디오가 갱신되어야 합니다", () => {
    // console.log(wrap.state("currentVideo"));
    // wrap.setCurrentVideo(null); // it works synchronously!
    // wrap.setVideos(fakeData);

    const entryTitle = wrap.find(".video-list-entry-title").first();
    entryTitle.simulate("click");

    const playerTitle = wrap.find(".video-player-details h3");
    expect(playerTitle.text()).toBe(entryTitle.text());
  });
});
