import {ACTIVE_CATEGORY} from './types';

export const activeCategory = category => ({
    type: ACTIVE_CATEGORY,
    payload: category
});