import { BAN_RESOURCE, UNBAN_RESOURCE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case BAN_RESOURCE:
      return { ...state, [action.payload]: true };
    case UNBAN_RESOURCE:
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    default:
      return state;
  }
};
