import {BAN_RESOURCE, UNBAN_RESOURCE} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case BAN_RESOURCE:
            const stCopy = {...state};
            stCopy[action.payload] = true;
            return stCopy;
        case UNBAN_RESOURCE: 
            const stateCopy = {...state};
            delete stateCopy[action.payload];
            return stateCopy; 
        default:
            return state;
    }
}