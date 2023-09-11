import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import TopMovies from "../../Components/Top10/topMovies";
import MovieCard from "../../Components/MovieCard/movieCard";
import Footer from "../Footer/Footer";

export default function Homepage() {
  const [showAllMovies, setShowAllMovies] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    async function fetchAllMovies() {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Dummy movie data
      const dummyMovies = [
        // ... Dummy movie data here
      ];

      setAllMovies(dummyMovies);
    }

    fetchAllMovies();
  }, []);

  const handleSeeMoreClick = (e) => {
    e.preventDefault();
    setShowAllMovies(!showAllMovies);
  };

  return (
    <div className="container-fluid text-center">
      <Navbar />
      <div className="row mt-5">
        <div className="col fs-3">Featured Movie</div>
        <div className="col">
          <a href="/seeMore" className="fs-4" onClick={handleSeeMoreClick}>
            {showAllMovies ? "See Less" : "See More"}
          </a>
        </div>
      </div>
      <div>
        <TopMovies showAll={showAllMovies} />
      </div>
      <div className="all-movies-container">
        <h1 className="all-movies-title">All movies</h1>
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
