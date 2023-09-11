// TopMovies.js

import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/movieCard";
import "../Top10/topMovies.scss";

async function fetchTop10Movies() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

  // Mocked top 10 movies data
  return [
    { id: 1, posterURL: "path_to_image1.jpg", title: "Movie Name 1" },
    { id: 2, posterURL: "path_to_image2.jpg", title: "Movie Name 2" },
    { id: 3, posterURL: "path_to_image1.jpg", title: "Movie Name 1" },
    { id: 4, posterURL: "path_to_image2.jpg", title: "Movie Name 2" },
    { id: 5, posterURL: "path_to_image1.jpg", title: "Movie Name 1" },
    { id: 6, posterURL: "path_to_image2.jpg", title: "Movie Name 2" },
    // ... add more mock movie data up to 10
  ];
}

function TopMovies({ showAll }) {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const topMovies = await fetchTop10Movies();
        setMovies(topMovies);
      }
  
      fetchData();
    }, []);
  
    return (
      <div>
        <div className="movie-grid">
          {movies.slice(0, showAll ? movies.length : 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  

export default TopMovies;
