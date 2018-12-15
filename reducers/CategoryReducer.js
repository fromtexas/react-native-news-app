import { ADD_CATEGORY, REMOVE_CATEGORY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, [action.payload]: true };
    case REMOVE_CATEGORY:
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    default:
      return state;
  }
};
