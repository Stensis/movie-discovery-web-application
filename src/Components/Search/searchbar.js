// MovieSearch.js

import React, { useState } from "react";
import MovieCard from "../../Components/MovieCard/movieCard";
import LoadingIndicator from "./LoadingIndicator";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);

    // Simulating an API call
    const fetchedMovies = await fetchMovies(query);
    setMovies(fetchedMovies);

    setIsLoading(false);
  };

  return (
    <div>
      <div className="input-data">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What do you want to watch?"
          required
        />
        {query && (
          <button
            className="clear-btn"
            onClick={(e) => {
              e.preventDefault();
              setQuery("");
            }}
          >
            X
          </button>
        )}
        <div className="buttonContainer">
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

// This is a mock function to simulate fetching movies. In real-world, replace this with an actual API call.
const fetchMovies = async (query) => {
  // Simulating a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mocked movies data
  return [
    {
      id: 1,
      posterURL: "path_to_image1.jpg",
      title: "Movie Name 1",
      releaseDate: "2023-01-01",
    },
    // ... Add more mocked movie objects
  ];
};

export default SearchBar;
