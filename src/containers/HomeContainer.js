import React, { useState, useEffect } from "react";
import Home from "../components/Home";

import { fetchPopular, fetchFavorite, fetchFeatured } from "../api/requests";
import axios from "axios";

const HomeContainer = ({ match }) => {
  const [featured, setFeatures] = useState([]);
  const [popular, setPopular] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetchPopular().then(res => setPopular(res));
    fetchFavorite().then(res => setFavorite(res));
    fetchFeatured().then(res => setFeatures(res));

    // axios
    //   .get("https://design-valley.herokuapp.com/tools")
    //   .then(res => console.log(res));
  }, []);

  return <Home featured={featured} popular={popular} favorite={favorite} />;
};

export default HomeContainer;
