import React from 'react';
import { connect } from 'react-redux';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  renderVideos = () => {
    const { videos } = this.props;
    return videos.map(video => <VideoItem video={video} key={video.id.videoId} />);
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderVideos()}
      </div>
    );
  }
}

const mapStateToProps = ({ videos }) => {
  return {videos};
};

export default connect(mapStateToProps)(VideoList);