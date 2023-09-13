import React from "react";
import Facebook from "../../Assets/Vector.jpg";
import Insta from "../../Assets/fa-brands_instagram.jpg";
import Twitter from "../../Assets/fa-brands_twitter.jpg";
import Youtube from "../../Assets/fa-brands_youtube.jpg";

export default function Footer() {
  return (
    <div class="container mt-5">
      {/* <!-- First vertical div --> */}
      <div class="row justify-content-center mb-1">
        <div class="col-md-auto text-center p-3 m-0">
          <img src={Facebook} alt="facebook-logo" width="40" />
        </div>
        <div class="col-md-auto text-center p-3 m-0">
          <img src={Insta} alt="Insta-logo" width="40" />
        </div>
        <div class="col-md-auto text-center p-3 m-0">
          <img src={Twitter} alt="Twitter-logo" width="40" />
        </div>
        <div class="col-md-auto text-center p-3 m-0">
          <img src={Youtube} alt="Youtube-logo" width="40" />
        </div>
      </div>

      {/* <!-- Second vertical div --> */}
      <div class="row justify-content-center mb-2 fw-bold">
        <div class="col-md-auto text-center p-3 m-0">Conditions of Use</div>
        <div class="col-md-auto text-center p-3 m-0">Privacy & Policy</div>
        <div class="col-md-auto text-center p-3 m-0">Press Room</div>
      </div>

      {/* <!-- Third vertical div --> */}
      <div class="row justify-content-center mb-4 fw-lighter">
        <div
          class="col-md-12 text-dark text-center"
          style={{ fontSize: "0.8rem" }}
        >
          &copy; 2021 MovieBox by Irene Njuguna.
        </div>
      </div>
    </div>
  );
}
