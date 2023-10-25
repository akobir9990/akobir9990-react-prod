import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import Admin from "../pages/admin/Admin";
import Orders from "../pages/orders/Orders";
import Basket from "../pages/basket/Basket";
import Likes from "../pages/likes/Likes";

function router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/likes" element={<Likes />} />
    </Routes>
  );
}

export default router;
