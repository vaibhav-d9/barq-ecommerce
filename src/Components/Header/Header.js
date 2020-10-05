import React, { useEffect, useState } from "react";

import "./Header.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth, db } from "../../firebase";

function Header({ cart }) {
  const [{ bag, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };

  return (
    <div className="header">
      <div className="user_profile">
        <p>Hello, {user ? user?.email : "Guest"}</p>
      </div>

      <div className="logo">
        <Link to="/">
          <h1>B.A.R.Q</h1>
        </Link>
      </div>

      <div className="header_right">
        <Link to={!user && "/login"}>
          <p onClick={handleAuthentication}>{user ? "Sign Out" : "Sign In"}</p>
        </Link>

        <p>Orders</p>

        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingCartIcon className="cart_icon" />
            <p>{user ? cart?.length : "0"}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
