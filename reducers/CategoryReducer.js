import {ADD_CATEGORY, REMOVE_CATEGORY} from '../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
        const stCopy = {...state};
        stCopy[action.payload] = true;
        return stCopy;
    case REMOVE_CATEGORY: 
        const stateCopy = {...state};
        delete stateCopy[action.payload];
        return stateCopy; 
    default:
        return state;
  }
}