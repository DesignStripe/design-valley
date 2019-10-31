import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { SET_CATEGORIES } from "../redux/reducers/categoriesReducer";

const SidebarContainer = ({ match }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    fetchCategories().then(res => {
      setCategories(res);
      setIsReady(true);
      dispatch({ type: SET_CATEGORIES, payload: res });
    });
  }, []);

  if (!isReady) return <Spinner />;

  return <Sidebar categories={categories} />;
};

export default SidebarContainer;
