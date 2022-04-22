import axios from "axios";

const KEY = "AIzaSyDGXrHtgkwdlGBirJMLHrJr478KX0NRm0Y";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,

    }
});
