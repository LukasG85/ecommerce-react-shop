import { Dispatch } from "redux";
import { FETCH_PRODUCTS, Products } from "../types";
import { db } from "../../firebase/utils";

export const fetchProducts = () => async (dispatch: Dispatch) => {
  const products: Products = [];

  await db.collection("Products").onSnapshot((snapshot: any) => {
    let changes = snapshot.docChanges();
    changes.forEach((change: any) => {
      if (change.type === "added") {
        products.push({
          ProductID: change.doc.id,
          ProductName: change.doc.data().ProductName,
          ProductPrice: change.doc.data().ProductPrice,
          ProductImage: change.doc.data().ProductImg,
        });
      }
    });
  });

  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};
