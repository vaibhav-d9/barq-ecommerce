import React from "react";

import "./Product.scss";

function Product({ image, productName, productPrice }) {
  return (
    <div className="product">
      <div className="product_top">
        <img className="productImg" src={image}></img>
        <button>ADD TO CART</button>
      </div>
      <div className="product_bottom">
        <p className="productName">{productName}</p>
        <p className="productPrice">Rs. {productPrice}</p>
      </div>
    </div>
  );
}

export default Product;
