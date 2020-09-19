import React from "react";
import { useStateValue } from "../../StateProvider";

import "./Product.scss";

function Product({ id, image, productName, productPrice }) {
  const [{ bag }, dispatch] = useStateValue();

  console.log("Bag --->", bag);

  const addToBag = () => {
    //dispatch the item into the datalayer
    dispatch({
      type: "ADD_TO_BAG",
      item: {
        id: id,
        image: image,
        productName: productName,
        productPrice: productPrice,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_top">
        <img className="productImg" src={image} alt="productImage"></img>
        <button onClick={addToBag}>ADD TO BAG</button>
      </div>
      <div className="product_bottom">
        <p className="productName">{productName}</p>
        <p className="productPrice">₹ {productPrice}</p>
      </div>
    </div>
  );
}

export default Product;
