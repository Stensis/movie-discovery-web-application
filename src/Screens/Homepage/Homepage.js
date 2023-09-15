import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopRatedMovies from "../../Components/TopRated/TopRatedMovies";
import Footer from "../Footer/Footer";

function Homepage() {
  return (
    <div>
      <HeroSection />
      <div className="container text-center mt-3">
        <div className="row justify-content-between">
          <div className="col-4">
            <h4 className="fs-3">Featured Movie</h4>
          </div>
          <div className="col-4">
            <a className="text-danger text-decoration-none" href="/">
              See more
            </a>
          </div>
        </div>
      </div>
      <div className="movie-card-container">
        <div className="movie-list">
          <TopRatedMovies />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
