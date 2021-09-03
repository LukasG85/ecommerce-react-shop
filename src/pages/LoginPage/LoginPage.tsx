import React, { FC } from "react";
import Layout from "../../components/Layout/Layout";
import "./LoginPage.scss";
import { ILoginPage } from "./models";
import SignIn from "./../../components/SignIn/SignIn";

const LoginPage: FC<ILoginPage> = () => {
  return (
    <div>
      <Layout>
        <SignIn />
      </Layout>
    </div>
  );
};

export default LoginPage;
