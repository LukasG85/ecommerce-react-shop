import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { UserContext } from "./global/UserContext";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const { user } = useContext<any>(UserContext);
  console.log(user);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/registration"
          render={() => (user ? <Redirect to="/" /> : <RegistrationPage />)}
        />
        <Route
          path="/login"
          render={() => (user ? <Redirect to="/" /> : <LoginPage />)}
        />
        <Route path="/add-product" component={AddProductPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
