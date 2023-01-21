import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = [];

export default function cartItems(state = initialState, action) {
  // eslint-disable-next-line default-case
  const stateCopy = [...state];

  switch (action.type) {
    case ADD_TO_CART:
      console.log("Add Reducer", action);
      return [...stateCopy, { cartData: action.data }];

    case REMOVE_TO_CART:
      stateCopy.pop();
      return stateCopy;

    default:
      return stateCopy;
  }
}
// NOTE = If initial state is an object or array don't Directly manuplate the initial state as they are reference data types and they have same memory address.
