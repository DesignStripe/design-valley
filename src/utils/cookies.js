import Cookies from "js-cookie";

function updateFavorites(favorites) {
  Cookies.set("favorites", { tools: favorites });
}

function getFavorites() {
  return Cookies.getJSON("favorites") ? Cookies.getJSON("favorites").tools : [];
}

export { updateFavorites, getFavorites };
