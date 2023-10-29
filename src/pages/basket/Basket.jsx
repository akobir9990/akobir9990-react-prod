/* eslint-disable react/prop-types */
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Basket({ basket, setBasket }) {
  console.log("basket.lebgth =>", basket.length);
  const basketLength = basket.length;

  console.log("basket.length =>", basket);
  if (basketLength > 0) {
    return (
      <div>
        <Header />
        <div className="container">basket non empty</div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="container">Your basket is empty</div>
      <Footer />
    </div>
  );
}

export default Basket;
