import { ADD_CATEGORY, REMOVE_CATEGORY } from "./types";

export const addCategory = category => ({
  type: ADD_CATEGORY,
  payload: category
});

export const removeCategory = category => ({
  type: REMOVE_CATEGORY,
  payload: category
});
