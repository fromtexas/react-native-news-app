import axios from 'axios';
import {FETCH_NEWS} from './types';



const API_KEY = 'apiKey=a8f31bc8eb22494a844c62dbc7b72b55';
const URL = 'https://newsapi.org/v2/top-headlines?';


export const fetchNews = () => async (dispatch, getState) => {
  const category = getState().category;
  const country = getState().country;
  let categoryArr = {};

  for(let i = 0; i < category.length; i++){

    categoryArr[category[i]] = [];
    
    for (let j = 0; j < country.length; j++){
      try {
        let {data} = await axios.get(`${URL}${API_KEY}&category=${category[i]}&country=${country[j]}`);
        categoryArr[category[i]] = [...categoryArr[category[i]], ...data.articles];
      } catch (err) {
        console.log(err);
      }
    }
  
  }


  dispatch({type: FETCH_NEWS, payload: categoryArr});

};








