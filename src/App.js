import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "../src/Components/Search/searchbar";
import Homepage from "./Screens/Homepage/Homepage";
import MovieDetails from "./Components/movieDetails";
import SearchResults from "./Components/SearchResults/SearchResults";

const App = () => {
  return (
    <div className="p-0 m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
