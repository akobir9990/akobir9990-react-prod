/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const getUser = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  };
  const [user, setUser] = useState(getUser());
  const getProducts = () => {
    return localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
  };
  const [products, setProducts] = useState(getProducts());
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productCategory, setProductCategory] = useState("");

  const getBasket = () => {
    return localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [];
  };
  const [basket, setBasket] = useState(getBasket());

  return (
    <AppContext.Provider
      value={{
        getUser,
        getProducts,
        getBasket,
        user,
        setUser,
        products,
        setProducts,
        basket,
        setBasket,
        productName,
        setProductName,
        productPrice,
        setProductPrice,
        productCategory,
        setProductCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
