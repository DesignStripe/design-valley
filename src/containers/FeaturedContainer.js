import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { fetchFeatured } from "../api";

const FeaturedContainer = ({}) => {
  const [featured, setFeatured] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchFeatured()
      .then(data => {
        setFeatured(data);
        setIsReady(true);
      })
      .catch(error => {
        setIsError(true);
        setErrorMessage(error.message);
      });
  }, []);

  return <Cards tools={featured} title="Featured" isReady={isReady} />;
};

export default FeaturedContainer;
