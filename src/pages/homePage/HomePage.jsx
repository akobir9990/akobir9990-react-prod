import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import fruits from "../../assets/images/fruits.svg";
import "./homePage.css";
function HomePage() {
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
      <Footer />
    </div>
  );
}

export default HomePage;
