import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setError(""); 
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
      setError("Please enter a search term.");
      return;
    }
    setError(""); 
    navigate("/search-results", { state: { searchText } });
  };

  return (
    <div className="search-container">
      <nav className="navbar">
        <form onSubmit={handleSearch}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="What do you want to watch?"
              onChange={handleInputChange}
              value={searchText}
              id="search-input"
            />
            <FiSearch
              color="#fff"
              size={20}
              onClick={handleSearch}
              className="search-icon"
            />
          </div>
          {error && <div className="error-text">{error}</div>}
        </form>
      </nav>
    </div>
  );
}

export default Search;
