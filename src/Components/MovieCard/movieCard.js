import React from "react";
import "../MovieCard/movieCard.scss";

function MovieCard({ movie }) {
  if (!movie) return null; // Don't render the component if no movie object

  return (
    <div className="card" style={{ width: "18rem" }} data-testid="movie-card">
      <img
        src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
        alt={movie.title || 'Movie'}
        className="card-img-top movie-poster"
        data-testid="movie-poster"
      />
      <div className="card-body">
        <h3 className="card-title movie-title" data-testid="movie-title">
          {movie.title || 'Title not available'}
        </h3>
        <p
          className="card-text movie-release-date"
          data-testid="movie-release-date"
        >
          {movie.releaseDate || 'Release date not available'}
        </p>
      </div>
    </div>
  );
}


export default MovieCard;