import React, { forwardRef, useState } from "react";
import { auth, db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

import "./CheckoutProduct.scss";

const CheckoutProduct = forwardRef(
  ({ id, image, productName, productPrice }, ref) => {
    const removeFromBag = () => {
      db.collection("users")
        .doc(auth.currentUser.uid)
        .collection("cart")
        .doc(id)
        .delete();
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <div className="productImage">
          <img src={image}></img>
        </div>
        <div className="checkoutProductInfo">
          <p className="checkoutProduct_name">{productName}</p>
          <p className="checkoutProduct_price">₹{productPrice}</p>
          <button className="removeFromBag" onClick={removeFromBag}>
            REMOVE
          </button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
