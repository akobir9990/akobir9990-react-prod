import "./offer.css";
import offerImg from "../../assets/images/offerImgTEST.svg";

function Offer() {
  return (
    <div className="offer">
      <div className="offerText">
        <h1 className="offerTitle">Оформите карту «Северяночка»</h1>
        <h3 className="offerSubtitle">
          И получайте бонусы при покупке в магазинах и на сайте
        </h3>
      </div>
      <img className="offerImage" src={offerImg} alt="" />
    </div>
  );
}

export default Offer;
