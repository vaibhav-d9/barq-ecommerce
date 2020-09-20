import React from "react";

import "./Header.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ bag, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="user_profile">
        <p>Hello, {user ? user.email : "Guest"}</p>
      </div>

      <div className="logo">
        <Link to="/">
          <h1>B.A.R.Q</h1>
        </Link>
      </div>

      <div className="header_right">
        <Link to="/login">
          <p onClick={handleAuthentication}>{user ? "Sign Out" : "Sign In"}</p>
        </Link>

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
