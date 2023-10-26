/* eslint-disable no-undef */
import { useState } from "react";
import "./App.css";
import getStore from "./utils/getStore/getStore";
import Router from "./router/router";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(getStore("products"));

  console.log(products);
  return <Router />;
}

export default App;
