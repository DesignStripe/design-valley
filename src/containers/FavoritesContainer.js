import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { fetchFavorite } from "../api/requests";

const FavoritesContainer = ({ match }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorite().then(res => setFavorites(res));
  }, []);

  return <Cards tools={favorites} />;
};

export default FavoritesContainer;
