import React, { useState, useEffect } from "react";
import { fetchToolsByCategory, fetchCategorById } from "../api";
import Category from "../pages/Category";

const CategoryContainer = ({ match, location, type }) => {
  const { id } = match.params;

  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState({});
  const [isReady, setIsReady] = useState(false);
  const [isErrors, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCategorById(id).then(res => setCategory(res));
    fetchToolsByCategory(id).then(res => {
      setTools(res);
      setIsReady(true);
    });
  }, [id]);

  return <Category tools={tools} title={category.name} isReady={isReady} />;
};

export default CategoryContainer;
