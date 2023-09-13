import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../Components/MovieCard/movieCard";
import LoadingIndicator from "../Loading/LoadingIndicator";
import Footer from "../../Screens/Footer/Footer";

function SearchResults() {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const searchText = location.state.searchText;
  const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

  const fetchSearch = async () => {
    if (searchText.trim() === "") {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchText}`
      );
      const data = await response.json();
      setContent(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [searchText]);

  return (
    <div className="content">
      {isLoading ? (
        <div>
          <LoadingIndicator />
        </div>
      ) : (
        <div>
          <div className="m-2">
            {" "}
            <button
              onClick={() => navigate(-1)}
              style={{
                color: "black",
                border: "none",
                borderRadius: "20px",
                padding: "5px 15px",
                marginLeft: "20px",
              }}
            >
              Go Back
            </button>
          </div>

          <h2 className="ml-2">
            Search Results For:{" "}
            <span style={{ color: "maroon" }}>{searchText}</span>
          </h2>
          <div className="row search-results">
            {content.map((movie) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default SearchResults;
