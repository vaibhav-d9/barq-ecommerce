import React from "react";

import "./Header.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ bag }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="user_profile">
        <p>Hello, Guest</p>
      </div>

      <div className="logo">
        <Link to="/">
          <h1>B.A.R.Q</h1>
        </Link>
      </div>

      <div className="header_right">
        <p>Sign In</p>
        <p>Orders</p>

        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingCartIcon className="cart_icon" />
            <p>{bag?.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
