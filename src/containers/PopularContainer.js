import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { fetchPopular } from "../api/requests";

const PopularContainer = ({ match }) => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular().then(res => setPopular(res));
  }, []);

  return <Cards tools={popular} />;
};

export default PopularContainer;
