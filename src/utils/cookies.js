import Cookies from "js-cookie";

function updateFavorites(favorites) {
  Cookies.set("favorites", { tools: favorites });
}

function addFavorite(id) {
  const previousFavorites = getFavorites();
  const newFavorites = [...previousFavorites, id];
  updateFavorites(newFavorites);
}
function removeFavorite(id) {
  const previousFavorites = getFavorites();
  const newFavorites = previousFavorites.filter(toolId => toolId !== id);
  updateFavorites(newFavorites);
}

function getFavorites() {
  return Cookies.getJSON("favorites") ? Cookies.getJSON("favorites").tools : [];
}

export { updateFavorites, getFavorites, addFavorite, removeFavorite };
