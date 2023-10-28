/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./App.css";
import getStore from "./utils/getStore/getStore";
import Router from "./router/router";

const getUser = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : false;
};
function App() {
  const [products, setProducts] = useState(getStore("products"));
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [user, setUser] = useState(getUser());

  const handleSubmit = ({ e, user }) => {
    e.preventDefault;
    const newUser = {
      name: user,
    };
    setUser(newUser);
    setUser("");
  };

  // console.log(products);
  // const addProd = () => {
  //   console.log("addprod");
  // };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("user", JSON.stringify(user));
  }, [products, user]);
  return <Router user={user} setUser={setUser} handleSubmit={handleSubmit} />;
}

export default App;
