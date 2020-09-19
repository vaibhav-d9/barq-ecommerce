import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CategoriesHeader from "./Components/CategoriesHeader/CategoriesHeader";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
