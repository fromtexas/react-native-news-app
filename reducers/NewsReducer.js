import { FETCH_NEWS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload;
    default:
      return state;
  }
};
