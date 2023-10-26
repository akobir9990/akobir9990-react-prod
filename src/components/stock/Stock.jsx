import "./stock.css";
import Product from "../../components/productItem/ProductItem";
import arrowRight from "../../assets/images/arrowRight.svg";

function Stock() {
  return (
    <div className="container">
      <div className="titleTexts">
        <span className="title">Акции</span>
        <button className="goToAllProducts">
          Все продукты <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="stockContent">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Stock;
