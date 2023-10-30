/* eslint-disable react/prop-types */
import "./basket.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Basket({ basket }) {
  console.log("basket.lebgth =>", basket.length);

  console.log("basket from basketPage =>", basket);

  return (
    <>
      <Header />
      <div className="container basket-container">
        {/* {basket.map((item) => {
          return (
            <div className="item" key={item.id}>
              <h1 key={item.name}>{item.name}</h1>
              <p key={item.price}>{item.price}</p>
            </div>
          );
        })} */}
        <div className="item">
          <div className="itemImg">
            <img src="" alt="???" />
          </div>
          <div className="itemInfo">
            <div className="itemName">
              Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»
            </div>
            <div className="itemPrice">44,50 ₽ за шт.</div>
          </div>
          <div className="itemConuter">
            <div className="incr">-</div>
            <div className="counter">2</div>
            <div className="decr">+</div>
          </div>
          <div className="totalPrice">89,00 ₽</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Basket;
