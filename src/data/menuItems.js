import categories from "./categories.json";

const items = categories.sort((a, b) => (a.name > b.name ? 1 : -1));

export default items;
