import React, { FC, useContext } from "react";
import { CartContext } from "../../global/CartContext";
import "./Product.scss";
import { IProduct } from "./models";
const Product: FC<IProduct> = (props) => {
  const { ProductName, ProductPrice, ProductImage, ProductID } = props;

  const { cart, dispatch } = useContext<any>(CartContext);
  console.log(cart);
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
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              id: ProductID,
              product: { ProductName, ProductPrice, ProductImage, ProductID },
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
