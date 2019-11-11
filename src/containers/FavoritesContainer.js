import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { fetchFavorites } from "../api";

const FavoritesContainer = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites().then(res => setFavorites(res));
  }, []);

  return <Cards tools={favorites} title="Favorites" />;
};

export default FavoritesContainer;
