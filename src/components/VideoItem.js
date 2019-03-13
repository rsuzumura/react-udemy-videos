import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';
import './VideoItem.css';

class VideoItem extends React.Component {
  onVideoClick = () => {
    this.props.selectVideo(this.props.video);
  }

  render() {
    const video = this.props.video;
    return (
      <div className="video-item item" onClick={this.onVideoClick}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { selectVideo })(VideoItem);