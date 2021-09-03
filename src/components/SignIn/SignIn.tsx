import React, { FC, useState } from "react";
import { auth } from "../../firebase/utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./SignIn.scss";
import { ISignIn } from "./models.d";

const SignIn: FC<ISignIn> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup form-container">
          <h2 className="signup__title">Sign In</h2>
          <form onSubmit={handleLogin} className="signup__form">
            <FormInput
              type="email"
              name="email"
              value={email}
              label="Email"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setEmail(e.target.value)
              }
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              label="Password"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setPassword(e.target.value)
              }
            />
            <div className="signin__btn">
              <Button type="submit">Register</Button>
            </div>
          </form>
          {error && <div className="error-msg">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
