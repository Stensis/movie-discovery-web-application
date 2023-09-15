import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import imdb from "../../Assets/imdb.jpg";
import appleIcon from "../../Assets/appleIcon.jpg";
import Banner from "../../Assets/posterImage.jpeg";
import Navbar from "../../Screens/Homepage/Navbar/Navbar";
import "./HeroSection.scss"

export default function HeroSection() {
  return (
    <main
      class="container-fluid"
      style={{
        backgroundImage: `url(${Banner})`,
        height: "60vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div class="text-center">
        <div class="row justify-content-start">
          <div class="col-12 col-md-4">
            <h1 className="text-white mt-4">John Wick 3 : Parabellum</h1>
            <div className="d-flex justify-content-center">
              <div className="d-flex align-items-center m-4">
                <img src={imdb} alt="Imdb logo" width={35} height={17} />
                <p className="text-white ms-2 mb-0">86.0 / 100</p>
              </div>
              <div className="d-flex align-items-center mr-4">
                <img
                  src={appleIcon}
                  alt="Rotten Tomato logo"
                  width={30}
                  height={30}
                />
                <p className="text-white ms-2 mb-0">97%</p>
              </div>
            </div>
            <p className="text-white">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <div class="row justify-content-center">
              <div class="col-auto">
                <button class="btn btn-danger d-flex align-items-center border-2 border-white rounded mx-auto">
                  <BsFillPlayFill size={24} className="text-white mr-2" />
                  <span class="text-uppercase font-weight-bold">
                    Watch Trailer
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
