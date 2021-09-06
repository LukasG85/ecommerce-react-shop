import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { cart } from "react-icons-kit/entypo/cart";
import { auth } from "../../firebase/utils";
import { UserContext } from "./../../global/UserContext";

import "./Header.scss";
import { IHeader } from "./models";

import logo from "../../assets/images/logo-shop.png";

export const Header: FC<IHeader> = () => {
  const { user } = useContext<any>(UserContext);

  const handleLogOut = () => {
    auth.signOut();
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__links">
          {!user ? (
            <div>
              <Link to="/login">LogIn</Link>
              <Link to="/registration">Register</Link>
            </div>
          ) : (
            <div>
              <Link to="/add-product">Add Product</Link>
              <Link to="/cart">
                <Icon icon={cart}></Icon>
              </Link>
              <button onClick={handleLogOut}>Logout</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
