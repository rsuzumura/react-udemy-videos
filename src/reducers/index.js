import { combineReducers } from 'redux';
import { selectedVideoReducer } from './selectedVideoReducer';
import { videosReducer } from './videosReducer';

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});