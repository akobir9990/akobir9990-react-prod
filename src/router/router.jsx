import { Route, Routes } from "react-router";
import Home from "../pages/home/HomePage";
import Admin from "../pages/admin/Admin";
import Login from "../pages/logIn/Login";
import Products from "../pages/products/Products";
import LikedProducts from "../pages/liked/LikedProducts";
import Basket from "../pages/basket/Basket";

function router(lsItem, setLsItem, getLs) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home lsItem={lsItem} setLsItem={setLsItem} getLs={getLs} />}
        />
        <Route
          path="/adminadmin"
          element={<Admin lsItem={lsItem} setLsItem={setLsItem} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/liked" element={<LikedProducts />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default router;
