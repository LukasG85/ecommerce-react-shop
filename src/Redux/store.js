import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
import logger from "redux-logger";
import { Products } from "./types";

// type InitialState = {
//   products: Products;
// };
// const initialState: InitialState = {
//   products: [],
// };

const initialState = {};
const composeEnchancer = compose;

export const middlewares = [logger, thunk];

// window.__RDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  // applyMiddleware(thunk)
  // initialState,
  composeEnchancer(applyMiddleware(...middlewares))
);

export default store;

// const productsReducer = createStore();
