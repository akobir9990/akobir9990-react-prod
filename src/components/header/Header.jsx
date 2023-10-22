import "./Header.css";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import search from "../../assets/images/search.svg";
import likes from "../../assets/images/like.svg";
import products from "../../assets/images/products.svg";
import basket from "../../assets/images/basket.svg";
import admin from "../../assets/images/admin.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import { NavLink } from "react-router-dom";
// import Admin from "../../pages/admin/Admin";

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button id="catalog">
        <img src={burger} alt="" />
        <h1>Каталог</h1>
      </button>
      <div className="input">
        <input type="text" name="" id="search" placeholder="Найти товар" />
        <img src={search} alt="" />
      </div>
      <div className="mainBtns">
        <NavLink to="/liked" className="btn">
          <img src={likes} alt="" className="btnIcon" />
          <span>Избранное</span>
        </NavLink>
        <NavLink to="/products" className="btn">
          <img src={products} alt="" className="btnIcon" />
          <span>продукты</span>
        </NavLink>
        <NavLink to="/basket" className="btn">
          <img src={basket} alt="" className="btnIcon" />
          <span>Корзина</span>
        </NavLink>
      </div>
      <NavLink to="/login" className="admin">
        <img src={admin} alt="" className="adminIcon" />
        <span>admin</span>
        <div className="icon">
          <img src={arrowDown} alt="" />
          {/* <img src={arrowRight} alt="" /> */}
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
