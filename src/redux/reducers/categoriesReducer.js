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
