import React, { FC } from "react";
import Header from "../Header/Header";
import "./Layout.scss";
import { ILayout } from "./models";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
