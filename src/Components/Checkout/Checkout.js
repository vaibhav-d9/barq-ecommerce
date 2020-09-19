import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

import "./Checkout.scss";

function Checkout() {
  return (
    <div className="checkout">
      <h1 className="checkout_header">Shopping Bag</h1>

      <div className="main_checkoutSection">
        <div className="checkout_products">
          <CheckoutProduct />
        </div>

        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
