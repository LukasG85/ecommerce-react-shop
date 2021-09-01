import React, { FC } from "react";
import Layout from "../../components/Layout/Layout";
import "./LoginPage.scss";
import { ILoginPage } from "./models";

const LoginPage: FC<ILoginPage> = () => {
  return (
    <div>
      <Layout>Login page</Layout>
    </div>
  );
};

export default LoginPage;
