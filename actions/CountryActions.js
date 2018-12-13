import { ADD_COUNTRY, REMOVE_COUNTRY } from "./types";

export const addCountry = country => ({
  type: ADD_COUNTRY,
  payload: country
});

export const removeCountry = country => ({
  type: REMOVE_COUNTRY,
  payload: country
});
