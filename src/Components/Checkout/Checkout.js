import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import FlipMove from "react-flip-move";

import "./Checkout.scss";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";

function Checkout({ cart }) {
  const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.productPrice + amount, 0);

  return (
    <div className="checkout">
      <h1 className="checkout_header">Shopping Bag</h1>

      <div className="main_checkoutSection">
        <div className="checkout_products">
          {cart.length == 0 && (
            <div className="empty_header">
              <h1>Your cart looks so empty!</h1>
              <Link to="/">
                <p>Go shopping</p>
              </Link>
            </div>
          )}
          <FlipMove>
            {cart.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                image={item.image}
                productName={item.productName}
                productPrice={item.productPrice}
              />
            ))}
          </FlipMove>
        </div>

        <div className="subtotal">
          <Subtotal noOfItems={cart?.length} totalPrice={getCartTotal(cart)} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
