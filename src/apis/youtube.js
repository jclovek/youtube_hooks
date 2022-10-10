import axios from "axios";

const KEY = "AIzaSyAGtexVX3GdNvBrvm6zRHtOHh8lBXQ5ecc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
