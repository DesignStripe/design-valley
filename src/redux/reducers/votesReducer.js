export const ADD_VOTE = "ADD_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";

const initialState = {
  votes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VOTE: {
      return {
        ...state,
        votes: [...state.votes, action.payload]
      };
    }

    case REMOVE_VOTE: {
      return {
        ...state
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const addVote = vote => dispatch => {
  dispatch({ type: ADD_VOTE, payload: vote });
};

export const removeVote = vote => dispatch => {
  dispatch({ type: REMOVE_VOTE, payload: vote });
};
