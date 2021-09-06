import React, { FC, useContext } from "react";
import "./Cart.scss";
import { ICard } from "./models";
import { CartContext } from "./../../global/CartContext";

const Cart: FC<ICard> = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return <div></div>;
};

export default Cart;
