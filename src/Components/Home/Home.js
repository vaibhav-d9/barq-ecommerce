import { Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Product from "../Product/Product";

import "./Home.scss";

function Home() {
  const [tees, setTees] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [trousers, setTrousers] = useState([]);

  useEffect(() => {
    //set tees
    db.collection("products")
      .doc("tees")
      .collection("items")
      .onSnapshot((snapshot) =>
        setTees(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            image: doc.data().image,
            productName: doc.data().productName,
            productPrice: doc.data().productPrice,
            category: doc.data().category,
          }))
        )
      );

    //set shirts
    db.collection("products")
      .doc("shirts")
      .collection("items")
      .onSnapshot((snapshot) =>
        setShirts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            image: doc.data().image,
            productName: doc.data().productName,
            productPrice: doc.data().productPrice,
            category: doc.data().category,
          }))
        )
      );

    //set jeans
    db.collection("products")
      .doc("jeans")
      .collection("items")
      .onSnapshot((snapshot) =>
        setJeans(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            image: doc.data().image,
            productName: doc.data().productName,
            productPrice: doc.data().productPrice,
            category: doc.data().category,
          }))
        )
      );

    //set trousers
    db.collection("products")
      .doc("trousers")
      .collection("items")
      .onSnapshot((snapshot) =>
        setTrousers(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            image: doc.data().image,
            productName: doc.data().productName,
            productPrice: doc.data().productPrice,
            category: doc.data().category,
          }))
        )
      );
  }, []);

  return (
    <div className="home">
      <div className="productCategory">
        <h1>TEES</h1>

        <div className="productCategory_products">
          {tees.map((item) => (
            <Product
              id={item.id}
              image={item.image}
              productName={item.productName}
              productPrice={item.productPrice}
              category={item.category}
            />
          ))}
        </div>
      </div>

      <div className="productCategory">
        <h1>SHIRTS</h1>

        <div className="productCategory_products">
          {shirts.map((item) => (
            <Product
              id={item.id}
              image={item.image}
              productName={item.productName}
              productPrice={item.productPrice}
              category={item.category}
            />
          ))}
        </div>
      </div>

      <div className="productCategory">
        <h1>JEANS</h1>
        <div className="productCategory_products">
          {jeans.map((item) => (
            <Product
              id={item.id}
              image={item.image}
              productName={item.productName}
              productPrice={item.productPrice}
              category={item.category}
            />
          ))}
        </div>
      </div>

      <div className="productCategory">
        <h1>TROUSERS</h1>

        <div className="productCategory_products">
          {trousers.map((item) => (
            <Product
              id={item.id}
              image={item.image}
              productName={item.productName}
              productPrice={item.productPrice}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
