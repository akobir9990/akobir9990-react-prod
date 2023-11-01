/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
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

  return (
    <AppContext.Provider value={{ getUser, getProducts, getBasket }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
