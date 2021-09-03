import React, { FC } from "react";
import "./Product.scss";
import { IProduct } from "./models";
const Product: FC<IProduct> = (props) => {
  console.log(props);
  const { ProductName, ProductPrice, ProductImage } = props;
  return (
    <div className="col-sm-12 col-md-3 product-item">
      <h3 className="product-item__title">{ProductName}</h3>
      <img
        className="product-item__image"
        src={ProductImage}
        alt="product-img"
      />
      <p className="product-item__price">{ProductPrice}</p>
    </div>
  );
};

export default Product;
