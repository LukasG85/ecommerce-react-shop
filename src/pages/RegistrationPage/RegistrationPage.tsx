import React, { FC } from "react";
import "./RegistrationPage.scss";
import { IRegistrationPage } from "./models";
import Layout from "../../components/Layout/Layout";

const RegistrationPage: FC<IRegistrationPage> = () => {
  return (
    <div>
      <Layout>Registration Page</Layout>
    </div>
  );
};

export default RegistrationPage;
