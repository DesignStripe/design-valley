import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { fetchFeatured } from "../api/requests";

const FeaturedContainer = ({ match }) => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchFeatured().then(res => setFeatured(res));
  }, []);

  return <Cards tools={featured} title="Featured" />;
};

export default FeaturedContainer;
