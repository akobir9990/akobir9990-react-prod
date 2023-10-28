/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import Admin from "../pages/admin/Admin";
import Likes from "../pages/likes/Likes";
import Orders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";
import Login from "../pages/login/Login";
import Security from "../pages/secure/Security";

function Router({ user, setUser, handleSubmit }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/admin"
        element={
          <Security user={user}>
            <Admin />
          </Security>
        }
      />
      <Route path="/likes" element={<Likes />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/basket" element={<Basket />} />
      <Route
        path="/login"
        element={
          <Login user={user} setUser={setUser} handleSubmit={handleSubmit} />
        }
      />
    </Routes>
  );
}
export default Router;
