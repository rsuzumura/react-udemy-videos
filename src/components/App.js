import React from 'react';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  onSubmit = term => {
    this.props.fetchVideos(term);
  };
  
  componentDidMount = () => {
    this.onSubmit('buildings');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail />
            </div>
            <div className="five wide column">
              <VideoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(null, { fetchVideos })(App);