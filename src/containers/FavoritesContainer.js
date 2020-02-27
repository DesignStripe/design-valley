import React, { useState, useEffect } from "react";
import Category from "../pages/Category";
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

  return <Category tools={favorites} title="Favorites" isReady={isReady} />;
};

export default FavoritesContainer;
