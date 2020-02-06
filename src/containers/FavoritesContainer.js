import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { fetchFavorites } from "../api";

const FavoritesContainer = () => {
  const [favorites, setFavorites] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchFavorites()
      .then(data => {
        setFavorites(data);
        setIsReady(true);
      })
      .catch(error => {
        setIsError(true);
        setErrorMessage(error.message);
      });
  }, []);

  return <Cards tools={favorites} title="Favorites" isReady={isReady} />;
};

export default FavoritesContainer;
