import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(`Error fetching movie details: ${error}`);
      }
    };

    fetchMovieDetails();
  }, [id, API_KEY]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Banner Section */}

      <div
        style={{
          position: "relative", 
          minHeight: "60vh",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute", 
            top: "10px", 
            left: "10px", 
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "5px 15px",
            zIndex: 2, 
          }}
        >
          Go Back
        </button>

        <div
          style={{
            backgroundImage: movie.backdrop_path
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`
              : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
          }}
        >
          <h3 data-testid="movie-title mb-2">{movie.title}</h3>
          <button
            style={{
              backgroundColor: "red",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "40px",
            }}
          >
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Movie Details Section */}
      <div style={{ padding: "50px" }}>
        <h5
          data-testid="movie-title"
          style={{ color: "maroon", fontSize: "40px" }}
        >
          {movie.title}
        </h5>
        <p data-testid="movie-release-date" style={{ color: "grey" }}>
          Release Date: {movie.release_date}
        </p>
        <p data-testid="movie-runtime" style={{ color: "grey" }}>
          Runtime: {movie.runtime} minutes
        </p>
        <p data-testid="movie-overview">{movie.overview}</p>
      </div>

      {/* Trailer */}
      {movie.trailer && (
        <div style={{ textAlign: "center" }}>
          <video width="320" height="240" controls>
            <source src={movie.trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
