import React, { useState, useEffect } from "react";
import Category from "../pages/Category";

import { fetchPopular } from "../api";

const PopularContainer = ({ match }) => {
  const [popular, setPopular] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchPopular(20).then(res => {
      setPopular(res);
      setIsReady(true);
    });
  }, []);

  return <Category tools={popular} title="Popular" isReady={isReady} />;
};

export default PopularContainer;
