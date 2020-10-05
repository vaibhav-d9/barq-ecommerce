import { Link } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

import "./Product.scss";

function Product({ id, image, productName, productPrice, category }) {
  const [{ bag }, dispatch] = useStateValue();
  const history = useHistory();

  const addToBag = () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      db.collection("users")
        .doc(currentUser.uid)
        .collection("cart")
        .doc(id)
        .set({
          id: id,
          image: image,
          productName: productName,
          productPrice: productPrice,
          category: category,
        });
    }
  };

  const selectProduct = () => {
    if (id) {
      history.push(`/product/${category}/${id}`);
    }
  };

  return (
    <div className="product">
      <div className="product_top">
        <img
          className="productImg"
          src={image}
          alt="productImage"
          onClick={selectProduct}
        />

        {/* <button onClick={addToBag}>ADD TO CART</button> */}
      </div>
      <div className="product_bottom">
        <p className="productName">{productName}</p>
        <p className="productPrice">₹ {productPrice}</p>
      </div>
    </div>
  );
}

export default Product;
