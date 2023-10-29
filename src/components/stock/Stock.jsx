/* eslint-disable react/prop-types */
import "./stock.css";
import arrowRight from "../../assets/images/arrowRight.svg";
import star_ranking from "../../assets/images/star_ranking.svg";

function Stock({ products, basket, setBasket }) {

  
  const addToBaske = (item) => {
    const newBasketItem = { item };
    setBasket((p) => {
      localStorage.setItem("basket", JSON.stringify([...p, newBasketItem]));
      return [...p, newBasketItem];
    });
  };



  console.log("basket => ", basket);
  return (
    <div className="container">
      <div className="titleTexts">
        <span className="title">Акции</span>
        <button className="goToAllProducts">
          Все продукты <img src={arrowRight} alt="" />
        </button>
      </div>
      <div className="stockContent">
        {products.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="top">
                {/* <img src={likeIcon} alt="like" className="like" /> */}
                <div className="img">{/* <img src={meal} alt="" /> */}</div>
                <div className="sale">-50%</div>
              </div>
              <div className="bottom">
                <div className="prices">
                  <div className="priceByCard">
                    <span className="priceByCard_price">{item.price}₽</span>
                    <span className="priceByCard_text">С картой</span>
                  </div>
                  <div className="simplePrice">
                    <span className="simplePrice_price">50,50 ₽</span>
                    <span className="simplePrice_text">Обычная</span>
                  </div>
                </div>
                <div className="name">{item.name}</div>
                <div className="rank">
                  <img src={star_ranking} alt="" id="star_20" />
                  <img src={star_ranking} alt="" id="star_40" />
                  <img src={star_ranking} alt="" id="star_60" />
                  <img src={star_ranking} alt="" id="star_80" />
                  <img src={star_ranking} alt="" id="star_100" />
                </div>
                <button
                  className="btnAddBasket"
                  onClick={() => addToBaske(item)}
                >
                  add
                </button>

                {/* <ItemBtnAddBasket addToBaske={addToBaske} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stock;
