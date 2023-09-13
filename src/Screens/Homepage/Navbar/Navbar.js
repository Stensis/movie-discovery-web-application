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
        height: "30vh",
        width: "100%",
      }}
    >
      <div className="navbar-content">
        <div class="row">
          <div class="col start mt-4 text-light">
            <h5>
              <img
                src={tv}
                alt="tv-logo"
                className="mr-3"
                style={{ marginRight: "20px" }}
              />
              MovieBox
            </h5>
          </div>

          <div class="col center mt-5">
            <SearchBar />
          </div>
          <div class="col end mt-4 text-light">
            <h5>
              Sign In
              <img src={Menu} alt="tv-logo" style={{ marginLeft: "20px" }} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
