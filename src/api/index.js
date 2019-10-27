import axios from "axios";
import { getFavorites } from "../utils/localStorage";

const API_BASE_URL = process.env.REACT_APP_API_HOST;

function fetchToolById(id) {
  return axios.get(API_BASE_URL + `tools/${id}`).then(res => res.data);
}

function fetchCategories(id) {
  return axios.get(API_BASE_URL + "categories").then(res => res.data);
}

function fetchToolsByCategory(id) {
  return axios.get(API_BASE_URL + `tools/category/${id}`).then(res => res.data);
}

function fetchFeatured() {
  return axios.get(API_BASE_URL + "featured").then(res => res.data);
}

function fetchPopular() {
  return axios.get(API_BASE_URL + "popular").then(res => res.data);
}

function fetchCategorById(id) {
  return axios.get(API_BASE_URL + `categories/${id}`).then(res => res.data);
}

async function fetchFavorite() {
  const favoritesIds = getFavorites();

  const promiseArray = favoritesIds.map(id => {
    return axios.get(API_BASE_URL + `tools/${id}`).then(res => res.data);
  });

  return await Promise.all(promiseArray);
}

function likeTool(id) {
  return axios.post(API_BASE_URL + `vote/like/${id}`);
}

function dislikeTool(id) {
  return axios.post(API_BASE_URL + `vote/dislike/${id}`);
}

function fetchVotes() {
  return axios.get(API_BASE_URL + `vote`).then(res => res.data);
}

export {
  fetchToolById,
  fetchToolsByCategory,
  fetchFeatured,
  fetchPopular,
  fetchFavorite,
  fetchCategories,
  fetchCategorById,
  likeTool,
  dislikeTool,
  fetchVotes
};
