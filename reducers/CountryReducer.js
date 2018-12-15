import { ADD_COUNTRY, REMOVE_COUNTRY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return { ...state, [action.payload]: true };
    case REMOVE_COUNTRY:
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    default:
      return state;
  }
};
