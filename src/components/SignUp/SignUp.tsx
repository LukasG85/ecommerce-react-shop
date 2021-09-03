import React, { FC, useState } from "react";
import { db, auth } from "../../firebase/utils";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./SignUp.scss";
import { ISignUp } from "./models.d";

const SignUp: FC<ISignUp> = (props: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [confirmPassword, setConfirmPassword] = useState<any>("");
  const [error, setError] = useState<string>("");

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user?.uid)
          .set({
            displayName: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            // props.history.push("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="signup">
      <div className="signup form-container">
        <h2 className="signup__title">Signup</h2>
        <form onSubmit={handleSignUp} className="signup__form">
          <FormInput
            type="text"
            name="Name"
            value={name}
            label="Name"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setName(e.target.value)
            }
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setConfirmPassword(e.target.value)
            }
          />
          <div className="signin__btn">
            <Button type="submit">Register</Button>
          </div>
        </form>
        {error && <div className="error-msg">{error}</div>}
      </div>
    </div>
  );
};

export default SignUp;
