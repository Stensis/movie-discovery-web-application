import React from "react";
import tv from "../../../Assets/tv.png";
import Menu from "../../../Assets/Menu.jpg";
import SearchBar from "../../../Components/Search/searchbar";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-content">
        <div class="row align-items-center">
          <div class="col-12 col-md-4 text-light text-left mt-3">
            <h5>
              <img src={tv} alt="tv-logo" className="mr-3" />
              MovieBox
            </h5>
          </div>

          <div class="col-12 col-md-4 text-center mt-3">
            <SearchBar />
          </div>

          <div class="col-12 col-md-4 text-light mt-3 text-md-right">
            <h5>
              Sign In
              <img src={Menu} alt="tv-logo" className="ml-3" />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
