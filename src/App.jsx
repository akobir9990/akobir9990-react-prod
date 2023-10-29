/* eslint-disable no-undef */
import { useState } from "react";
import "./App.css";
// import getStore from "./utils/getStore/getStore";
import Router from "./router/router";

const getUser = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};
const getProducts = () => {
  return localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
};
const getBasket = () => {
  return localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [];
};

function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState(getProducts());
  const [basket, setBasket] = useState(getBasket());
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = ({ e, user }) => {
    e.preventDefault;
    const newUser = {
      name: user,
    };
    setUser(newUser);
  };
  console.log("basket from app.jsx => ", basket);

  return (
    <Router
      productName={productName}
      setProductName={setProductName}
      productPrice={productPrice}
      setProductPrice={setProductPrice}
      productCategory={productCategory}
      setProductCategory={setProductCategory}
      user={user}
      setUser={setUser}
      handleSubmit={handleSubmit}
      setProducts={setProducts}
      products={products}
      basket={basket}
      setBasket={setBasket}
    />
  );
}

export default App;
