import { FETCH_VIDEOS } from "../actions";

export const videosReducer = (videos = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload;
    default:
      return videos;
  }
};