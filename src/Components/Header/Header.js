import React from "react";

import "./Header.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="user_profile">
        <p>Hello, Guest</p>
      </div>

      <div className="logo">
        <h1>B.A.R.Q</h1>
      </div>

      <div className="header_right">
        <p>Sign In</p>
        <p>Orders</p>
        <div className="header_cart">
          <ShoppingCartIcon className="cart_icon" />
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
