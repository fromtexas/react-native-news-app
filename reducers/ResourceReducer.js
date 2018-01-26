import {BAN_RESOURCE, UNBAN_RESOURCE} from '../actions/types';

export default (state=[], action) => {
    switch (action.type) {
        case BAN_RESOURCE:
            return [...state, action.payload];
        case UNBAN_RESOURCE: 
            return state.filter((item) => {
                if(item !== action.payload){
                    return item;
                }
            })
        default:
            return state;
    }
}