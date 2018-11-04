import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.jsx";
import YTSearch from "youtube-api-search";
import config from "../config";

const API_KEY = config.API_YOUTUBE_KEY;
console.log(API_KEY);
YTSearch({ key: API_KEY, term: "surfboards" }, data => console.log(data));

// Create a new component. This components should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Take this commponent's generated HTML and put it on the page

ReactDOM.render(<App />, document.querySelector(".container"));
