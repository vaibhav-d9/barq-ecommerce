import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase";

import "./ProductPage.scss";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function ProductPage() {
  const { productId, category } = useParams();
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (auth.currentUser) {
      if (productId) {
        db.collection("products")
          .doc(category)
          .collection("items")
          .doc(productId)
          .onSnapshot((snapshot) => setProduct(snapshot.data()));
      }
    }

    // ** scrolls to top **
    window.scrollTo(0, 0);
  }, []);

  const addToBag = () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      db.collection("users")
        .doc(currentUser.uid)
        .collection("cart")
        .doc(product.id)
        .set({
          id: product.id,
          image: product.image,
          productName: product.productName,
          productPrice: product.productPrice,
          category: product.category,
        });
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="productPage">
      <div className="productImage">
        <img src={product?.image} alt="" />
      </div>

      <div className="productDetails">
        <h3 className="productTitle">{product?.productName}</h3>
        <p className="productPrice">₹ {product?.productPrice}</p>
        <p className="productDesc">
          Top in soft jersey made from a cotton blend with a round neckline and
          long sleeves.
        </p>

        <h4>Product Details:</h4>
        <ul>
          <li>Slim Fit</li>
          <li>95% Cotton, 5% Elastane</li>
          <li>Machine wash</li>
          <li>Product Code: {product?.id}</li>
        </ul>

        <div className="productSize">
          <p>Select size</p>
          <select>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <br />
        <button className="addToCart" onClick={addToBag}>
          ADD
        </button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Item added to cart"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <button className="addToCloset">Add To Closet</button>
      </div>
    </div>
  );
}

export default ProductPage;
