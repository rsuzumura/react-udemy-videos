import Youtube from "../api/Youtube";

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export const fetchVideos = query => {
  return async (dispatch) => {
    const response = await Youtube.get('/search', {
      params: { q: query }
    });
    dispatch({
      type: FETCH_VIDEOS,
      payload: response.data.items
    });
    if (response.data.items.length > 0) {
      dispatch(selectVideo(response.data.items[0]));
    }
  };
};

export const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};