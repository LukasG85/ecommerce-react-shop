import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase/utils";

export const ProductsContext = createContext([]);

const ProductsContextProvider = (props: any) => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const prevProducts: any = [];
    db.collection("Products").onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          prevProducts.push({
            ProductID: change.doc.id,
            ProductName: change.doc.data().ProductName,
            ProductPrice: change.doc.data().ProductPrice,
            ProductImage: change.doc.data().ProductImage,
          });
        }
        setProducts({
          products: prevProducts,
        });
      });
    });
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
