import axios from "axios";
import tools from "../data/tools";
import categories from "../data/categories";
import { getFavorites } from "../utils/localStorage";

function findCategory(id) {
  return categories.find(category => category.id === id);
}

function populateCategory(arr) {
  return arr.map(item => {
    const categoryId = item.category;
    item.category = findCategory(categoryId);
    return item;
  });
}

function fetchToolByCategory(id) {
  const selectedTools = tools.filter(tool => tool.category === id);

  return new Promise((resolve, reject) =>
    resolve(populateCategory(selectedTools))
  );
}

function fetchFeatured() {
  const selectedTools = [tools[0]];

  return new Promise((resolve, reject) =>
    resolve(populateCategory(selectedTools))
  );
  // axios.get("");
}

function fetchPopular() {
  const selectedTools = [tools[1]];

  return new Promise((resolve, reject) =>
    resolve(populateCategory(selectedTools))
  );
  // axios.get("");
}

function fetchFavorite() {
  const favoritesIds = getFavorites();

  const favoriteTools = favoritesIds.map(favoriteId =>
    tools.find(tool => tool.id === favoriteId)
  );

  return new Promise((resolve, reject) =>
    resolve(populateCategory(favoriteTools))
  );
}

export { fetchToolByCategory, fetchFeatured, fetchPopular, fetchFavorite };
