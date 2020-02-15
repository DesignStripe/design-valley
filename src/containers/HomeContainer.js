import React, { useState, useEffect } from "react";
import Home from "../pages/Home";

import { fetchPopular, fetchFavorites, fetchFeatured } from "../api";

const HomeContainer = ({ match }) => {
  const [isFeaturedReady, setIsFeaturedReady] = useState(false);
  const [isPopularReady, setIsPopularReady] = useState(false);
  const [isFavoritesReady, setIsFavoritesReady] = useState(false);
  const [featured, setFeatures] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular().then(res => {
      setPopular(res);
      setIsPopularReady(true);
    });
    fetchFavorites().then(res => {
      setFavorites(res);
      setIsFavoritesReady(true);
    });
    fetchFeatured().then(res => {
      setFeatures(res);
      setIsFeaturedReady(true);
    });
  }, []);

  return (
    <Home
      featured={featured}
      popular={popular}
      favorites={favorites}
      isFeaturedReady={isFeaturedReady}
      isPopularReady={isPopularReady}
      isFavoritesReady={isFavoritesReady}
    />
  );
};

export default HomeContainer;
