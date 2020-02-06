import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { fetchPopular } from "../api";

const PopularContainer = ({ match }) => {
  const [popular, setPopular] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchPopular().then(res => {
      setPopular(res);
      setIsReady(true);
    });
  }, []);

  return <Cards tools={popular} title="Popular" isReady={isReady} />;
};

export default PopularContainer;
