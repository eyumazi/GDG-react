import { useState, useEffect } from "react";
import axios from "axios";
import useWishlist from "../hooks/useWishlist";
import "../MovieAPI.css"

export const MovieAPI = () => {
  const API =
    "https://api.themoviedb.org/3/movie/popular?api_key=4316f5ea1d4376a5f58eee4c8567944e";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addWishlist } = useWishlist();
  const [clickedMovies, setClickedMovies] = useState({});

  const fetchMovies = async () => {
    try {
      const response = await axios.get(API);
      setMovies(response.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddToWishlist = (movie) => {
    addWishlist(movie);
    setClickedMovies((prev) => ({ ...prev, [movie.id]: true }));
    alert(`${movie.title} has been added to your wishlist!`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "300px", textAlign: "center" }}>
            <h2>{movie.title}</h2>
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <button
              className={`wishlist-button ${
                clickedMovies[movie.id] ? "clicked" : ""
              }`}
              onClick={() => handleAddToWishlist(movie)}
              disabled={clickedMovies[movie.id]}
            >
              {clickedMovies[movie.id]
                ? "Added to Wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieAPI;
