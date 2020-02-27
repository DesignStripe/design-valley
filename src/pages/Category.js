import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import { nextCategorySelector } from "../redux/reducers/categoriesReducer";

import { fetchToolsByCategory, fetchCategorById } from "../api";
import HeaderBanner from "../components/HeaderBanner";

const Category = ({ tools, title, isReady }) => {
  return (
    <>
      {/* <HeaderBanner /> */}
      <Cards tools={tools} title={title} isReady={isReady} />
    </>
  );
};

export default Category;
