import { useState } from "react";
import Router from "./router/router";

function getLocalStorage() {
  if (localStorage.getItem("products")) {
    return JSON.parse(localStorage.getItem("products"));
  } else {
    return [];
  }
}

function App() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <>
      <Router
        // getLs={getLS}
        // lsItem={lsItem}
        // setLsItem={setLsItem}
        productName={productName}
        setProductName={setProductName}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
      />
      <button
        onClick={() => {
          alert("e malades");
          console.log(getLocalStorage());
        }}
      >
        add
      </button>
    </>
  );
}

export default App;
