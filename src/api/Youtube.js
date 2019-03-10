import Axios from "axios";

const KEY = 'AIzaSyDdR1C3NUfYctL8L9b8jY4UeWwZP2HfHbo';
export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});