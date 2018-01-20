import axios from 'axios';
import {FETCH_NEWS} from './types';
import qs from 'qs';


const API_KEY = 'apiKey=a8f31bc8eb22494a844c62dbc7b72b55';
const URL = 'https://newsapi.org/v2/top-headlines?';


export const fetchNews = () => async (dispatch, getState) => {
  const category = getState().category;
  let categoryArr = {};

  for(let i = 0; i < category.length; i++){
    
    try {
      let {data} = await axios.get(`${URL}${API_KEY}&category=${category[i]}`);
      categoryArr[category[i]] = data.articles;

    } catch (err) {
      console.log(err);
    }

  }

  dispatch({type: FETCH_NEWS, payload: categoryArr});

  console.log(categoryArr);
};



