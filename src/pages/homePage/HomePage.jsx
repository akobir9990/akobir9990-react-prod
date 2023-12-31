import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import fruits from "../../assets/images/fruits.svg";
import Stock from "../../components/stock/Stock";
import NewItems from "../../components/newItems/NewItems";
import PurchasedBefore from "../../components/purchasedBefore/PurchasedBefore";
import SpetialOffers from "../../components/specialOffers/SpecialOffers";
import Map from "../../components/ourStores/OurStores";

import "./homePage.css";
// eslint-disable-next-line react/prop-types
function HomePage({ products, basket, setBasket }) {
  return (
    <div>
      <Header />
      <div className="container home_container">
        <div className="deliveryTitle">
          <div className="img">
            <img src={fruits} alt="" />
          </div>
          <div className="title">Доставка бесплатно от 1000 ₽</div>
        </div>
      </div>
      <div className="mainComponents">
        <div className="homeComponent">
          <Stock basket={basket} setBasket={setBasket} products={products} />
        </div>
        <div className="homeComponent">
          <NewItems />
        </div>
        <div className="homeComponent">
          <PurchasedBefore />
        </div>
        <div className="homeComponent">
          <SpetialOffers />
        </div>
        <div className="homeComponent">
          <Map />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
