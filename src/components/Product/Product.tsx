import React, { FC } from "react";
import "./Product.scss";
import { IProduct } from "./models";
const Product: FC<IProduct> = (props) => {
  const { ProductName, ProductPrice, ProductImage } = props;
  return (
    <div className="col-sm-12 col-md-3">
      <div className="product-item">
        <div className="product-item__image">
          <img src={ProductImage} alt="product-img" />
        </div>
        <h3 className="product-item__title">{ProductName}</h3>
        <p className="product-item__price">
          {" "}
          <span>Price:</span>
          {ProductPrice}
        </p>
      </div>
    </div>
  );
};

export default Product;
