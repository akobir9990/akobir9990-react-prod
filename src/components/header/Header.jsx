import "./header.css";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import searchIcon from "../../assets/images/search.svg";

function Header() {
  return (
    <div>
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="catalog">
          <img
            src={burger}
            alt="burger"
            className="burger
          "
          />
          <span>Каталог</span>
        </button>
        <div className="search">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Найти товар"
          />
          <img className="searchIcon" src={searchIcon} alt="searchIcon" />
        </div>
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
