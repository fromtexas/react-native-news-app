import {combineReducers} from 'redux';
import news from './NewsReducer';
import category from './CategoryReducer';
import activeCategory from './ActiveCategoryReducer';
import country from './CountryReducer';
import ban from './ResourceReducer';
import settings from './SettringsReducer';

export default combineReducers({
    news,
    category,
    activeCategory,
    country,
    ban,
    settings
  });
