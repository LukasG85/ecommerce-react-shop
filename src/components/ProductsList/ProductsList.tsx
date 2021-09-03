import React, { FC, useContext } from "react";
import { ProductsContext } from "../../global/ProductsContext";

import "./ProductsList.scss";
import { IProductsList } from "./models";
import Product from "../Product/Product";

const ProductsList: FC<IProductsList> = () => {
  const { products } = useContext<any>(ProductsContext);

  return (
    <div className="product-list">
      <div className="container">
        <div className="row">
          {products?.map((product: any) => (
            <Product key={product.ProductID} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
