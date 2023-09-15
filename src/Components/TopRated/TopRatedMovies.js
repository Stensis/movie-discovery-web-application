import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/movieCard";
import "./topRated.scss";

function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch movies. HTTP error! Status: ${response.status}`
          );
        }

        const movieData = await response.json();
        setMovies(movieData.results.slice(0, 10)); // Take the first 10 movies
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
        setError(`Error fetching top-rated movies. ${error.message}`);
      }
    };

    fetchTopRatedMovies();
  }, [API_KEY]);

  return (
    <div className="movie-card-container">
      {error && <div className="error">{error}</div>}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovies;
