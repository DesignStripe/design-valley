import React, { useState, useEffect } from "react";
import Home from "../components/Home";

import { fetchPopular, fetchFavorites, fetchFeatured } from "../api";

const HomeContainer = ({ match }) => {
  const [featured, setFeatures] = useState([]);
  const [popular, setPopular] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetchPopular().then(res => setPopular(res));
    fetchFavorites().then(res => setFavorite(res));
    fetchFeatured().then(res => setFeatures(res));
  }, []);

  return <Home featured={featured} popular={popular} favorite={favorite} />;
};

export default HomeContainer;
