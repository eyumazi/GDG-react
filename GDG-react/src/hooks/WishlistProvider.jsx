import WishlistContext from "./WishlistContext";
import { useState } from "react";
import PropTypes from "prop-types";

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addWishlist = (movie) => {
    setWishlist((prevWishlist) => [...prevWishlist, movie]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WishlistProvider;
