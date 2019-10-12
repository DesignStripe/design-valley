import React from "react";
import { FiHeart, FiStar, FiTrendingUp } from "react-icons/fi";
import categories from "./categories.json";

export const fixedItems = [
  {
    icon: <FiHeart fill="red" color="red" />,
    name: "Favorites",
    id: "favorites",
    isHighlighted: true
  },
  {
    icon: <FiStar fill="#FBC02D" color="#FBC02D" />,
    name: "Featured",
    id: "featured",
    isHighlighted: true
  },
  {
    icon: <FiTrendingUp color="#10a55a" />,
    name: "Popular",
    id: "popular",
    isHighlighted: true
  }
];

export const menuCategories = categories.sort((a, b) =>
  a.name > b.name ? 1 : -1
);

// export default [...fixed, { name: "devider" }, ...items];
