import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

import "./Checkout.scss";

function Checkout() {
  const [{ bag }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <h1 className="checkout_header">Shopping Bag</h1>

      <div className="main_checkoutSection">
        <div className="checkout_products">
          {bag.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              productName={item.productName}
              productPrice={item.productPrice}
            />
          ))}
        </div>

        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
