import React, { useEffect, useState } from "react";

const API_KEY = "d4eb188f4c67fb6e266e1d11107cc01c";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState({});
  // const movieId = match.params.id;
  const movieId = 2;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  return (
    <div class="card mb-3" style={{ width: "40rem" }}>
      {" "}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        class="card-img-top"
        alt={movie.title}
      />
      <div class="card-body">
        <h5 class="card-title" data-testid="movie-title">
          {movie.title}
        </h5>
        <p class="card-text" data-testid="movie-release-date">
          Release Date: {movie.release_date}
        </p>
        <p class="card-text" data-testid="movie-runtime">
          Runtime: {movie.runtime} minutes
        </p>
        <p class="card-text" data-testid="movie-overview">
          {movie.overview}
        </p>
      </div>
      {movie.trailer && (
        <video width="320" height="240" controls>
          <source src={movie.trailer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default MovieDetails;
