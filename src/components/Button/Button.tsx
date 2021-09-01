import React, { FC } from "react";
import "./Button.scss";
import { IButton } from "./models";

const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
