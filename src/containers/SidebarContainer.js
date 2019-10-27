import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api";
import Sidebar from "../components/Sidebar";
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

  return <Sidebar categories={categories} />;
};

export default SidebarContainer;
