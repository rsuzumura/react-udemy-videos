import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({ video }) => {
  if (!video)
    return <div>Loading...</div>;

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

const mapStateToProps = ({selectedVideo}) => {
  return { video: selectedVideo };
}
export default connect(mapStateToProps)(VideoDetail);