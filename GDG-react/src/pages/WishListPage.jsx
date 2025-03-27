import useWishlist from "../hooks/useWishlist"

const WishListPage = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const {wishlist} = useWishlist();
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>MY wishlist </h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {wishlist.map((movie) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishListPage