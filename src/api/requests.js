import axios from "axios";
import tools from "../data/tools";
import { getFavorites } from "../utils/localStorage";

function fetchToolByCategory(id) {
  const selectedTools = tools.filter(tool => tool.category === id);

  return new Promise((resolve, reject) => resolve(selectedTools));
  // axios.get("");
}

function fetchFeatured() {
  const selectedTools = [tools[0]];

  return new Promise((resolve, reject) => resolve(selectedTools));
  // axios.get("");
}

function fetchPopular() {
  const selectedTools = [tools[1]];

  return new Promise((resolve, reject) => resolve(selectedTools));
  // axios.get("");
}

function fetchFavorite() {
  const favoritesIds = getFavorites();

  const favoriteTools = favoritesIds.map(favoriteId =>
    tools.find(tool => tool.id === favoriteId)
  );
  console.log(favoriteTools);

  return new Promise((resolve, reject) => resolve(favoriteTools));
  // axios.get("");
}

export { fetchToolByCategory, fetchFeatured, fetchPopular, fetchFavorite };
