import React, { FC } from "react";
import Cart from "../../components/Cart/Cart";
import Layout from "../../components/Layout/Layout";
import "./CartPage.scss";
import { ICartPage } from "./models";

const CartPage: FC<ICartPage> = () => {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
};

export default CartPage;
