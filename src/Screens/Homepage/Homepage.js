import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import MovieCard from "../../Components/MovieCard/movieCard";
import Footer from "../Footer/Footer";

export default function Homepage() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    };
    fetch("https://api.themoviedb.org/3/trending/movie/day", options)
      .then((response) => response.json())
      .then((data) => {
        const slicedArray = data.results.slice(0, 10);
        setAllMovies(slicedArray);
      });
  }, []);

  return (
    <div className="container-fluid text-center">
      <Navbar />
      <div className="row mt-5">
        <div className="col fs-3">Featured Movie</div>
        <div className="movie-card-container">
          {allMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
