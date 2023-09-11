import { useState, useEffect } from 'react';

const API_KEY = "d4eb188f4c67fb6e266e1d11107cc01c";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results.slice(0, 10)));
  }, []);

  const searchMovies = (searchTerm) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  };

  return [movies, searchMovies];
};

export default useMovies;
