import Home from "../../Assets/Home.jpg";
import MovieBox from "../../Assets/tv.png";
import Movies from "../../Assets/Movie Projector.jpg";
import TvSeries from "../../Assets/TV Show.jpg";
import Upcoming from "../../Assets/Calendar.jpg";
import Logout from "../../Assets/Logout.jpg";
import DashboardComponent from "./Dashboard";

export default function MoviesPage() {
  return (
    <div class="container-fluid">
      <div class="row">
        {/* <!-- Sidebar --> */}
        <nav
          id="sidebar"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar"
          style={{
            height: "100vh",
            borderRight: "2px solid grey",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "30px",
          }}
        >
          <div class="position-sticky">
            <ul class="nav flex-column">
              <div class="d-flex align-items-center mt-4">
                <img src={MovieBox} alt="movie-logo" />
                <h4 class="mb-0 ml-2">MovieBox</h4>
              </div>

              <li class="nav-item mt-5">
                <a class="nav-link active" href="/">
                  <span style={{ marginRight: "1rem" }}>
                    <img src={Home} alt="Home-logo" />
                  </span>
                  Home
                </a>
              </li>
              <li class="nav-item mt-4">
                <a class="nav-link" href="/movies">
                  <span style={{ marginRight: "1rem" }}>
                    <img src={Movies} alt="Movies-logo" />
                  </span>
                  Movies
                </a>
              </li>
              <li class="nav-item mt-4">
                <a class="nav-link" href="/tvSeries">
                  <span style={{ marginRight: "1rem" }}>
                    <img src={TvSeries} alt="Tv-series-logo" />
                  </span>
                  Tv series
                </a>
              </li>
              <li class="nav-item mt-4">
                <a class="nav-link" href="/upcoming">
                  <span style={{ marginRight: "1rem" }}>
                    <img src={Upcoming} alt="Upcoming-logo" />
                  </span>
                  Upcoming
                </a>
              </li>
            </ul>
            <ul class="nav mt-5">
              <li class="nav-item">
                <a class="nav-link" href="/logout">
                  <span style={{ marginRight: "1rem" }}>
                    <img src={Logout} alt="Logout-logo" />
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Page Content --> */}
        <main
          class="col-md-9 ms-sm-auto col-lg-10 px-md-4 "
          style={{ width: "" }}
        >
          {/* <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
          </div> */}
          <div className="mt-4 w-50" style={{ width: "30vh" }}>
            <DashboardComponent />
          </div>
        </main>
      </div>
    </div>
  );
}
