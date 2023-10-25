import "./header.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div>
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="catalog">Каталог</button>
        <input type="text" name="" id="search" />
        <div className="btns">
          <button className="likes">likes</button>
          <button className="orders">orders</button>
          <button className="basket">basket</button>
        </div>
        <div className="admin">
          <img src="" alt="ava" className="ava" />
          <span>admin name</span>
          <img src="" alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
