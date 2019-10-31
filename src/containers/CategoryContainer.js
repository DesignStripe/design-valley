import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import { nextCategorySelector } from "../redux/reducers/categoriesReducer";

import { fetchToolsByCategory, fetchCategorById } from "../api";

const CategoryContainer = ({ match, location }) => {
  const { id } = match.params;
  const next = useSelector(nextCategorySelector);
  console.log(next);

  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    fetchCategorById(id).then(res => setCategory(res));
    fetchToolsByCategory(id).then(res => setTools(res));
  }, [id]);

  return <Cards tools={tools} title={category.name} />;
};

export default CategoryContainer;
