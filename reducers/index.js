import {combineReducers} from 'redux';
import news from './NewsReducer';
import category from './CategoryReducer';

export default combineReducers({
    news,
    category,
  });
