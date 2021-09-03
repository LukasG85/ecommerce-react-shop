import React, { FC } from "react";
import "./RegistrationPage.scss";
import { IRegistrationPage } from "./models";
import Layout from "../../components/Layout/Layout";
import SignUp from "../../components/SignUp/SignUp";

const RegistrationPage: FC<IRegistrationPage> = () => {
  return (
    <div>
      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
};

export default RegistrationPage;
