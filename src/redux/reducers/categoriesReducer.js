export const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
export const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
  array: [],
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY: {
      return {
        ...state,
        selected: action.payload
      };
    }

    case SET_CATEGORIES: {
      return {
        ...state,
        array: action.payload
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const setCurrentCategory = selected => dispatch => {
  dispatch({ type: SET_CURRENT_CATEGORY, payload: selected });
};

export const setCategories = categories => dispatch => {
  dispatch({ type: SET_CATEGORIES, payload: categories });
};

export const nextCategorySelector = state =>
  getNext(state.categories.array, state.categories.selected);

function getNext(arr, index) {
  if (!Array.isArray(arr) || arr.length < 1) return null;

  let nextIndex = 0;
  if (index !== arr.length - 1) {
    nextIndex = index + 1;
  }
  const item = arr[nextIndex];
  return `/category/${item._id}`;
}

function getPrevious(arr, index) {
  let previousIndex = arr.length - 1;
  if (index !== 0) {
    previousIndex = index - 1;
  }
  const item = arr[previousIndex];

  return `/category/${item._id}`;
}
