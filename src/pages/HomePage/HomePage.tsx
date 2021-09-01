import React, { FC } from "react";
import "./HomePage.scss";
import { IHomePage } from "./models";
import Layout from "../../components/Layout/Layout";
import ProductsList from "../../components/ProductsList/ProductsList";

const HomePage: FC<IHomePage> = () => {
  return (
    <div>
      <Layout>
        Home
        <ProductsList />
      </Layout>
    </div>
  );
};

export default HomePage;
