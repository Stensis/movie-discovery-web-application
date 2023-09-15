import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import "../MovieCard/movieCard.scss";
import Imdb from "../../Assets/imdb.jpg";
import tomato from "../../Assets/appleIcon.jpg";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [genres, setGenres] = useState({});
  const [error, setError] = useState(null); // Added error state

  const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
  console.log(BEARER_TOKEN)

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?language=en-US`,
          {
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch genres. HTTP error! Status: ${response.status}`
          );
        }

        const genresData = await response.json();
        const genresMap = {};
        genresData.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });
        setGenres(genresMap);
      } catch (error) {
        console.error("Error fetching genres:", error);
        setError(error.message);
      }
    };

    fetchGenres();
  }, [BEARER_TOKEN]);

  if (!movie) return null;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Unknown Release Date";
    }

    try {
      const date = new Date(dateString);
      if (isNaN(date)) {
        return "Invalid Release Date";
      }
      return format(date, "do MMMM, yyyy");
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Release Date";
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((genreId) => genres[genreId]).join(", ");
  };

  return (
    <Link style={{textDecoration:"none"}} to={`/movie/${movie.id}`}>
      <div
        className="card mt-4"
        style={{ width: "25rem" }}
        data-testid="movie-card"
      >
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <>
            <div className="image-wrapper">
              <span className="bg-disabled" onClick={toggleFavorite}>
                {isFavorite ? (
                  <AiFillHeart className="heart-filled" />
                ) : (
                  <FiHeart className="heart" />
                )}
              </span>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie.title || "Movie"}
                className="card-img-top movie-poster"
                data-testid="movie-poster"
              />
            </div>

            <div className="card-body">
              <p
                className="card-text movie-release-date"
                data-testid="movie-release-date"
              >
                {`Release Date: ${
                  formatDate(movie.release_date) || "Release date not available"
                }`}
              </p>
              <h3 className="card-title movie-title" data-testid="movie-title">
                {movie.title || "Title not available"}
              </h3>

              <div className="imdb-card">
                <span className="imbd-btn">
                  <img src={Imdb} alt="imdb-logo" />
                  <p className="icons-name">{movie.vote_average}</p>
                </span>
                <span className="imbd-btn-two">
                  <img src={tomato} alt="imdb-tomato" />
                  <p className="icons-name">97%</p>
                </span>
              </div>

              <div>
                <p className="genre">{getGenreNames(movie.genre_ids)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default MovieCard;
