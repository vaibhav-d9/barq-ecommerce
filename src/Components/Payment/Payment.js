import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import FlipMove from "react-flip-move";

import "./Payment.scss";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBagTotal } from "../../reducer";

function Payment() {
  const [{ bag }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const handleSubmit = (e) => {};

  const handleChange = (e) => {
    //listen for errors in the CardElement and display the error as the user types in
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <h1>Checkout ({bag?.length} items)</h1>
      <div className="pay">
        <div className="product_details">
          <FlipMove>
            {bag?.map((item) => (
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
        <div className="payment_details">
          <h3>Payment method</h3>

          <div className="">
            <div className="payment_method">
              <input type="radio" name="method" />
              <label>Pay on Delivery</label>
            </div>

            <div className="payment_method">
              <input type="radio" name="method" />
              <label>Credit/Debit Card</label>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} className="cardElement" />
              </form>
            </div>
          </div>
          <p className="total_amount">
            Total amount : <strong>₹ {getBagTotal(bag)}</strong>
          </p>
          <button>PROCEED FOR PAYMENT</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
