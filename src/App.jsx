/* eslint-disable no-undef */
import { useState } from "react";
import "./App.css";
// import getStore from "./utils/getStore/getStore";
import Router from "./router/router";
import { useGlobalContext } from "./context";

function App() {
  const { getUser, getProducts, getBasket } = useGlobalContext();

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
