import axios from "axios";
import tools from "../data/tools";
import categories from "../data/categories";
import { getFavorites } from "../utils/localStorage";

const defaultCategory = {
  name: "",
  id: "",
  color: "#111111"
};

const GOOGLE_BUCKET_URL = "https://storage.cloud.google.com/resources-images/";

function getImageFilename(name) {
  const filename = name
    .toLowerCase()
    .split(" ")
    .join("-");
  return GOOGLE_BUCKET_URL + "original/" + filename + ".png";
}

function getThumbFilename(name) {
  const filename = name
    .toLowerCase()
    .split(" ")
    .join("-");
  return GOOGLE_BUCKET_URL + "thumbs/" + filename + ".png";
}

function findCategory(id) {
  return categories.find(category => {
    return category.id === id;
  });
}

function populateCategory(arr) {
  return arr.map(item => {
    const categoryId = item.category;
    return {
      ...item,
      category: findCategory(categoryId),
      image: getImageFilename(item.name),
      thumb: getThumbFilename(item.name)
    };
  });
}

function fetchToolById(id) {
  const selectedTool = tools.find(tool => tool.id.toString() === id);

  return new Promise((resolve, reject) =>
    resolve(populateCategory([selectedTool])[0])
  );
}

function fetchCategoryNameById(id) {
  return new Promise(resolve => {
    const category = categories.find(category => {
      return category.id === id;
    });
    const name = category.name || "";
    resolve(name);
  });
}

function fetchToolByCategory(id) {
  const selectedTools = tools.filter(tool => tool.category === id);

  return new Promise((resolve, reject) =>
    resolve(populateCategory(selectedTools))
  );
}

function fetchFeatured() {
  const selectedTools = [tools[0], tools[1], tools[2], tools[4]];

  return new Promise((resolve, reject) =>
    resolve(populateCategory(selectedTools))
  );
  // axios.get("");
}

function fetchPopular() {
  const selectedTools = [tools[5], tools[6], tools[7], tools[8]];

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

export {
  fetchToolById,
  fetchToolByCategory,
  fetchFeatured,
  fetchPopular,
  fetchFavorite,
  fetchCategoryNameById
};
