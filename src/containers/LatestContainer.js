import React, { useState, useEffect } from "react";
import Category from "../pages/Category";
import { fetchLatest } from "../api";

const LatestContainer = ({}) => {
  const [latest, setLatest] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchLatest()
      .then(data => {
        setLatest(data);
        setIsReady(true);
      })
      .catch(error => {
        setIsError(true);
        setErrorMessage(error.message);
      });
  }, []);

  return <Category tools={latest} title="Latest" isReady={isReady} />;
};

export default LatestContainer;
