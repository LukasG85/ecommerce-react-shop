import { FETCH_PRODUCTS, Products } from "../types";

type Action = {
  type: string;
  payload: Products;
};

export const productsReducer = (state = [], action: Action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};
