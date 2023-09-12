import React from "react";
import "../MovieCard/movieCard.scss";

function MovieCard({ movie }) {
  if (!movie) return null; // Don't render the component if no movie object

  return (
    <div className="card" style={{ width: "18rem" }} data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
        alt={movie.title || "Movie"}
        className="card-img-top movie-poster"
        data-testid="movie-poster"
      />
      <div className="card-body">
        <h3 className="card-title movie-title" data-testid="movie-title">
          {movie.title || "Title not available"}
        </h3>
        <p
          className="card-text movie-release-date"
          data-testid="movie-release-date"
        >
          {movie.release_date || "Release date not available"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
