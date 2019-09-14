function updateFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify({ tools: favorites }));
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
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  return favorites ? favorites.tools : [];
}

export { updateFavorites, getFavorites, addFavorite, removeFavorite };
