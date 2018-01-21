import {ACTIVE_CATEGORY} from '../actions/types';

export default (state='', action) => {
    switch (action.type) {
        case ACTIVE_CATEGORY:   
            return action.payload;
        default:
            return state;
    }
}