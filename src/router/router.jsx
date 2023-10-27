import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import Admin from "../pages/admin/Admin";
import Likes from "../pages/likes/Likes";
import Orders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";
import Login from "../pages/login/Login";

function Router(user) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={<Admin user={user} />}
        // render={(props) => <Admin {...props} user={user} />}
      />
      <Route path="/likes" element={<Likes />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default Router;
