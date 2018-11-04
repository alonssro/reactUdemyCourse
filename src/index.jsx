import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.jsx";
import YTSearch from "youtube-api-search";
import config from "../config";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";
const API_KEY = config.API_YOUTUBE_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onSelectedVideo={selectedVideo => {
            this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
