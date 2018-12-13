import { SETTINGS_UPDATED } from "../actions/types";

export default (state = true, action) => {
  switch (action.type) {
    case SETTINGS_UPDATED:
      return action.payload;
    default:
      return state;
  }
};
