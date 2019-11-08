export const ADD_VOTE = "ADD_VOTE";
export const UPDATE_VOTE = "UPDATE_VOTE";
export const REMOVE_VOTE = "REMOVE_VOTE";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_VOTE: {
      const newVote = action.payload;
      const hasVotes = state.length > 0;

      const isUnique = state.every(
        currentVote => currentVote.id !== newVote.id
      );

      if (!hasVotes) {
        return [newVote];
      } else if (isUnique) {
        return [...state, newVote];
      } else {
        return state.map(currentVote =>
          currentVote.id === newVote.id ? newVote : currentVote
        );
      }
    }

    case UPDATE_VOTE: {
      const newVote = action.payload;

      return state.votes.map(currentVote =>
        currentVote.tool === newVote.tool ? newVote : currentVote
      );
    }

    case REMOVE_VOTE: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export const addVote = vote => dispatch => {
  dispatch({ type: ADD_VOTE, payload: vote });
};

export const removeVote = vote => dispatch => {
  dispatch({ type: REMOVE_VOTE, payload: vote });
};
