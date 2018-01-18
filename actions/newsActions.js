import axios from 'axios';
import {FETCH_NEWS} from './types';
import qs from 'qs';


const URL = 'https://newsapi.org/v2/&apiKey=a8f31bc8eb22494a844c62dbc7b72b55';

const temporary = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a8f31bc8eb22494a844c62dbc7b72b55';

export const fetchNews = () => async dispatch => {
    try {
      let {data} = await axios.get(temporary);    
      
      dispatch({type: FETCH_NEWS, payload: data});
    } catch (err) {
      console.log(err);
    }
  };



