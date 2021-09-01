import React, { FC } from "react";
import "./FormInput.scss";
import { IFormItem } from "./models";

const FormInput: FC<IFormItem> = ({
  handleChange,
  handleFile,
  label,
  ...props
}) => {
  return (
    <div className="form-item">
      {label && <label className="form-item__label">{label}</label>}
      {handleFile ? (
        <input className="form-item__input" onChange={handleFile} {...props} />
      ) : (
        <input
          className="form-item__input"
          onChange={handleChange}
          {...props}
        />
      )}
    </div>
  );
};

export default FormInput;
