import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import fruits from "../../assets/images/fruits.svg";
import Stock from "../../components/stock/Stock";
import NewItems from "../../components/newItems/NewItems";

import "./homePage.css";
function HomePage(user, setUser) {
  return (
    <div>
      <div className="container">
        <input
          type="text"
          name=""
          id="goToSecretPage"
          value={user.name}
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="hack">Submit</button>
      </div>
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
          <Stock />
        </div>
        <div className="homeComponent">
          <NewItems />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
