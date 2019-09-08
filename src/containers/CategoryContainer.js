import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

import { fetchToolByCategory } from "../api/requests";

const CategoryContainer = ({ match }) => {
  const { id } = match.params;
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetchToolByCategory(id).then(res => setTools(res));
  }, [id]);

  return <Cards tools={tools} />;
};

export default CategoryContainer;
