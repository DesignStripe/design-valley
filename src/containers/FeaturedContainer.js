import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { fetchFeatured } from "../api";

const FeaturedContainer = ({}) => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchFeatured().then(data => setFeatured(data));
  }, []);

  return <Cards tools={featured} title="Featured" />;
};

export default FeaturedContainer;
