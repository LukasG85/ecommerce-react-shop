import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { IHeader } from "./models";

import logo from "../../assets/images/logo-shop.png";

export const Header: FC<IHeader> = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__links">
          <ul>
            <Link to="/login">LogIn</Link>
            <Link to="/registration">Register</Link>
            <Link to="/add-product">Add Product</Link>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
