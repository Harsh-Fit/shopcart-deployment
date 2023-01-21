import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
export const addToCart = (data) => {
  console.log("Add Action ", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.log("Remove Action");
  return {
    type: REMOVE_TO_CART,
  };
};

// In type never pass value as a string always use Constants for setting value of type , because we need type both in Action & Reducer
