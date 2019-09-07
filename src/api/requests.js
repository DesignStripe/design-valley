import axios from "axios";
import tools from "../data/tools";

function fetchToolByCategory(id) {
  console.log(id);

  return new Promise((resolve, reject) => resolve(tools[id]));
  // axios.get("");
}

export { fetchToolByCategory };
