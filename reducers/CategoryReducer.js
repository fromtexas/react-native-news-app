import {ADD_CATEGORY, REMOVE_CATEGORY} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case REMOVE_CATEGORY:
        return state.filter(item => {
          if(item !== action.payload) {
            return item;
          }
        });
    default:
      return state;
  }
}