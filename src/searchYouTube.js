export const searchYouTube = ({ query, max, key }, callback) => {
  // TODO
  const url = "https://www.googleapis.com/youtube/v3/search?";
  fetch(
    `${url}key=${key}&part=snippet&regionCode=KR&maxResults=${max}&type=video&q=${query}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.items.length === 0) {
        callback({ error: "동영상이 존재하지 않습니다!" });
      } else {
        callback({ videos: data.items, currentVideo: data.items[0] });
      }
    });
};
