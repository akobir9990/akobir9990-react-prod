/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./App.css";
import getStore from "./utils/getStore/getStore";
import Router from "./router/router";

function App() {
  const [products, setProducts] = useState(getStore("products"));
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [user, setUser] = useState(true);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return <Router user={user} />;
}

export default App;
