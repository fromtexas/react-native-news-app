import axios from "axios";
import { FETCH_NEWS } from "./types";

const API_KEY = "apiKey=a8f31bc8eb22494a844c62dbc7b72b55";
const URL = "https://newsapi.org/v2/top-headlines?";

export const fetchNews = () => async (dispatch, getState) => {
  const category = getState().category;
  const country = getState().country;
  let categoryArr = {};

  const categoryKeys = Object.keys(category);
  const countryKeys = Object.keys(country);

  for (let i = 0; i < categoryKeys.length; i++) {
    categoryArr[categoryKeys[i]] = [];

    for (let j = 0; j < countryKeys.length; j++) {
      try {
        let { data } = await axios.get(
          `${URL}${API_KEY}&category=${categoryKeys[i]}&country=${
            countryKeys[j]
          }`
        );
        categoryArr[categoryKeys[i]] = [
          ...categoryArr[categoryKeys[i]],
          ...data.articles
        ];
      } catch (err) {
        console.log(err);
      }
    }
  }

  dispatch({ type: FETCH_NEWS, payload: categoryArr });
};
