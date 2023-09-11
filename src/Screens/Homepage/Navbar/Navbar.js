import React from "react";
import tv from "../../../Assets/tv.png";
import Menu from "../../../Assets/Menu.jpg";
import Banner from "../../../Assets/posterImage.jpeg";
import SearchBar from "../../../Components/Search/searchbar";

export default function Navbar() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${Banner})`,
        height: "50vh",
        width: "100%",
      }}
    >
      <div className="navbar-content">
        <div class="row">
          <div class="col start mt-4">
            <img src={tv} alt="tv-logo" className="mr-3" />
            <span>
              <a
                href="/moviesPage"
                className="text-decoration-none text-light fs-4 ml-2"
              >
                MovieBox
              </a>
            </span>
          </div>

          <div class="col center mt-4">
            <SearchBar />
          </div>
          <div class="col end mt-4 text-light">
            <h4>
              Sign In
              <img src={Menu} alt="tv-logo" />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
