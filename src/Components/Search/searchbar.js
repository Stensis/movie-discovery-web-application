import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
      alert("Please enter a search term.");
      return;
    }
    navigate("/search-results", { state: { searchText } });
  };

  return (
    <div className="search-container">
      <nav className="navbar">
        <form onSubmit={handleSearch}>
          <div className="input-wrapper position-relative">
            <input
              style={{
                backgroundColor: "transparent",
                padding: "5px 40px 5px 20px",
                border: "2px solid gray",
                borderRadius: "20px",
                color: "white",
                width: "100%",
              }}
              type="text"
              placeholder=" What do you want to watch ?"
              onChange={handleInputChange}
              value={searchText}
              id="search-input"
            />
            <FiSearch
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                color: "#fff",
                cursor: "pointer",
              }}
              size={20}
              onClick={handleSearch}
            />
          </div>
        </form>
      </nav>
    </div>
  );
}

export default Search;
