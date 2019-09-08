import axios from "axios";
import tools from "../data/tools";

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
  // pick em from cookies...
  const selectedTools = [tools[3], tools[4]];

  return new Promise((resolve, reject) => resolve(selectedTools));
  // axios.get("");
}

export { fetchToolByCategory, fetchFeatured, fetchPopular, fetchFavorite };
