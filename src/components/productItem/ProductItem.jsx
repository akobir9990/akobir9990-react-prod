import "./productItem.css";
import star_ranking from "../../assets/images/star_ranking.svg";
import ItemBtnAddBasket from "../itemBtnAddBasket/ItemBtnAddBasket";
import likeIcon from "../../assets/images/likeIcon.svg";
import meal from "../../assets/images/mealImgTEST.svg";

function ProductItem() {
  return (
    <div>
      <div className="item">
        <div className="top">
          <img src={likeIcon} alt="like" className="like" />
          <div className="img">
            <img src={meal} alt="" />
          </div>
          <div className="sale">-50%</div>
        </div>
        <div className="bottom">
          <div className="prices">
            <div className="priceByCard">
              <span className="priceByCard_price">44,50 ₽</span>
              <span className="priceByCard_text">С картой</span>
            </div>
            <div className="simplePrice">
              <span className="simplePrice_price">50,50 ₽</span>
              <span className="simplePrice_text">Обычная</span>
            </div>
          </div>
          <div className="name">Г/Ц Блинчики с мясом вес, Россия</div>
          <div className="rank">
            <img src={star_ranking} alt="" id="star_20" />
            <img src={star_ranking} alt="" id="star_40" />
            <img src={star_ranking} alt="" id="star_60" />
            <img src={star_ranking} alt="" id="star_80" />
            <img src={star_ranking} alt="" id="star_100" />
          </div>
          <ItemBtnAddBasket />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
