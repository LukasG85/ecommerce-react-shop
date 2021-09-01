import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/add-product" component={AddProductPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
