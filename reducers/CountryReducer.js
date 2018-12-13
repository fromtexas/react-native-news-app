import { ADD_COUNTRY, REMOVE_COUNTRY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      const stCopy = { ...state };
      stCopy[action.payload] = true;
      return stCopy;
    case REMOVE_COUNTRY:
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    default:
      return state;
  }
};
