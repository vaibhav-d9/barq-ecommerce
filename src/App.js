import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CategoriesHeader from "./Components/CategoriesHeader/CategoriesHeader";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductPage from "./Components/ProductPage/ProductPage";

const promise = loadStripe(
  "pk_test_51HSJBGHnUAXr0gumkQZ7qlgWsKIgorp2TEXlI2VgT5pJWMvmZAvC8b8qAHe0832HQ2yT2LdhJUXblzBYXGvUEhql00mphya1Tr"
);

function App() {
  const [{ bag }, dispatch] = useStateValue();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //will only load when app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

        db.collection("users")
          .doc(authUser.uid)
          .collection("cart")
          .onSnapshot((snapshot) =>
            setCart(
              snapshot.docs.map((doc) => ({
                id: doc.data().id,
                image: doc.data().image,
                productName: doc.data().productName,
                productPrice: doc.data().productPrice,
              }))
            )
          );
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
          <Route exact path="/product/:category/:productId">
            <Header cart={cart} />
            <ProductPage />
          </Route>
          <Route exact path="/payment">
            <Header cart={cart} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/checkout">
            <Header cart={cart} />
            {/* <CategoriesHeader /> */}
            <Checkout cart={cart} />
          </Route>

          <Route exact path="/">
            <Header cart={cart} />
            <CategoriesHeader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
