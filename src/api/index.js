import axios from "axios";
import { getFavorites } from "../utils/localStorage";
import shuffle from "../utils/shuffle";

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

function fetchRelated(id) {
  return axios
    .get(API_BASE_URL + `related/${id}`)
    .then(res => shuffle(res.data).slice(0, 4));
}

function fetchPopular() {
  return axios.get(API_BASE_URL + "popular").then(res => res.data);
}

function fetchCategorById(id) {
  return axios.get(API_BASE_URL + `categories/${id}`).then(res => res.data);
}

async function fetchFavorites() {
  const favoritesIds = getFavorites();

  const promiseArray = favoritesIds.map(id => {
    return axios.get(API_BASE_URL + `tools/${id}`).then(res => res.data);
  });

  return await Promise.all(promiseArray);
}

function postEmail(email) {
  return axios.post(API_BASE_URL + `newsletter/subscribe/${email}`);
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
  fetchFavorites,
  fetchCategories,
  fetchCategorById,
  fetchRelated,
  likeTool,
  dislikeTool,
  fetchVotes,
  postEmail
};
