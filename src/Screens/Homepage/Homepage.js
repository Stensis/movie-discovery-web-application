import React, { useState, useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MovieCard from "../../Components/MovieCard/movieCard";
import Footer from "../Footer/Footer";

console.log(`Bearer ${process.env.REACT_APP_BEARER_TOKEN}`);

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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.results) {
          const slicedArray = data.results.slice(0, 10);
          setAllMovies(slicedArray);
        } else {
          console.error("Unexpected API response:", data);
        }
      })

      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }, []);

  return (
    <div className="">
      <HeroSection />
      <div className="row">
        <div class="container text-center mt-3">
          <div class="row justify-content-between">
            <div class="col-4">
              <h4 className="fs-3">Featured Movie</h4>
            </div>
            <div class="col-4">
              <a className="text-danger text-decoration-none" href="/">
                See more
              </a>
            </div>
          </div>
        </div>
        <div className="movie-card-container" style={{ overflowX: "auto" }}>
          <div className="row">
            {allMovies.map((movie) => (
              <div key={movie.id} className="col-md-3 col-12">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
