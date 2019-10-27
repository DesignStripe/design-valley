import React, { useState, useEffect } from "react";

import { fixedItems } from "../data/menuItems";

import Sidebar from "../components/Sidebar";

import { fetchCategories } from "../api";
import Spinner from "../components/Spinner";

const SidebarContainer = ({ match }) => {
  const [categories, setCategories] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchCategories().then(res => {
      setCategories(res);
      setIsReady(true);
    });
  }, []);

  if (!isReady) return <Spinner />;

  return <Sidebar fixedItems={fixedItems} menuCategories={categories} />;
};

export default SidebarContainer;
