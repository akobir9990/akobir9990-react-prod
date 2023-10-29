/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import Admin from "../pages/admin/Admin";
import Likes from "../pages/likes/Likes";
import Orders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";
import Login from "../pages/login/Login";
import Security from "../pages/secure/Security";

function Router({
  user,
  setUser,
  handleSubmit,
  productName,
  setProductName,
  productPrice,
  setProductPrice,
  productCategory,
  setProductCategory,
  addProduct,
  setProducts,
  products,
  basket,
  setBasket,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage products={products} basket={basket} setBasket={setBasket} />
        }
      />
      <Route
        path="/admin"
        element={
          <Security user={user} addProduct={addProduct}>
            <Admin
              productName={productName}
              setProductName={setProductName}
              productPrice={productPrice}
              setProductPrice={setProductPrice}
              productCategory={productCategory}
              setProductCategory={setProductCategory}
              user={user}
              addProduct={addProduct}
              setProducts={setProducts}
              products={products}
            />
          </Security>
        }
      />
      <Route path="/likes" element={<Likes />} />
      <Route path="/orders" element={<Orders />} />
      <Route
        path="/basket"
        element={<Basket basket={basket} setBasket={setBasket} />}
      />
      <Route
        path="/login"
        element={
          <Login
            username={user}
            setUserName={setUser}
            handleSubmit={handleSubmit}
          />
        }
      />
    </Routes>
  );
}
export default Router;
