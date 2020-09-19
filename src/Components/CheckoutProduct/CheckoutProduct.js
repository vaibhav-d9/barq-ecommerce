import React from "react";
import { useStateValue } from "../../StateProvider";

import "./CheckoutProduct.scss";

function CheckoutProduct({ id, image, productName, productPrice }) {
  const [{ bag }, dispatch] = useStateValue();

  const removeFromBag = () => {
    dispatch({
      type: "REMOVE_FROM_BAG",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
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

export default CheckoutProduct;
