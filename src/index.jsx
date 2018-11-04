import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar.jsx";

const API_KEY = process.env.API_KEY_YOUTUBE;

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
