import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { fetchFavorite } from "../api";

const FavoritesContainer = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorite().then(res => setFavorites(res));
  }, []);

  return <Cards tools={favorites} title="Favorites" />;
};

export default FavoritesContainer;
