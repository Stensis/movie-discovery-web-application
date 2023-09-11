import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "../src/Components/Search/searchbar";
import Homepage from "./Screens/Homepage/Homepage";
import MoviesPage from "./Screens/Movies/Movies";
import MovieDetails from "./Components/movieDetails";

const App = () => {
  return (
    <div className="p-0 m-0">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/moviesPage" element={<MoviesPage />} />
        <Route path="/movies/:id" component={<MovieDetails/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
