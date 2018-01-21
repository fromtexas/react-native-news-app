import {ADD_COUNTRY, REMOVE_COUNTRY} from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case ADD_COUNTRY:
            return [...state, action.payload];    
        case REMOVE_COUNTRY:
        return state.filter(item => {
            if(item !== action.payload) {
            return item;
            }
        });
        default:
            return state;
    }
}