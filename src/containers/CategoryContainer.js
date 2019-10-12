import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { fetchToolByCategory, fetchCategoryNameById } from "../api/requests";

const CategoryContainer = ({ match }) => {
  const { id } = match.params;
  const [tools, setTools] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchCategoryNameById(id).then(res => setTitle(res));
    fetchToolByCategory(id).then(res => setTools(res));
  }, [id]);

  return <Cards tools={tools} title={title} />;
};

export default CategoryContainer;
