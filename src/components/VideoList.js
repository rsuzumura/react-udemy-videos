import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  renderVideos = () => {
    const { videos, onVideoSelect } = this.props;
    return videos.map(video => <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />);
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderVideos()}
      </div>
    );
  }
}

export default VideoList;