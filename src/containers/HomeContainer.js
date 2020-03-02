import React, { useState, useEffect } from "react";
import Home from "../pages/Home";

import {
  fetchPopular,
  fetchFavorites,
  fetchFeatured,
  fetchLatest
} from "../api";

const HomeContainer = ({ match }) => {
  const [isFeaturedReady, setIsFeaturedReady] = useState(false);
  const [isPopularReady, setIsPopularReady] = useState(false);
  const [isFavoritesReady, setIsFavoritesReady] = useState(false);
  const [isLatestReady, setIsLatestReady] = useState(false);
  const [featured, setFeatures] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);

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
    fetchLatest(8).then(res => {
      setLatest(res);
      setIsLatestReady(true);
    });
  }, []);

  return (
    <Home
      featured={featured}
      popular={popular}
      favorites={favorites}
      latest={latest}
      isFeaturedReady={isFeaturedReady}
      isPopularReady={isPopularReady}
      isFavoritesReady={isFavoritesReady}
      isLatestReady={isLatestReady}
    />
  );
};

export default HomeContainer;
