import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CategoriesHeader from "./Components/CategoriesHeader/CategoriesHeader";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ bag }, dispatch] = useStateValue();

  useEffect(() => {
    //will only load when app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("USER ->", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <CategoriesHeader />
            <Checkout />
          </Route>

          <Route exact path="/">
            <Header />
            <CategoriesHeader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
