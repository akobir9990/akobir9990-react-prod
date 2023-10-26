import "./spetialOffers.css";
import Offer from "../../components/offer/Offer";

function SpecialOffers() {
  return (
    <div className="container spetialOffers-container">
      <h1 className="titleTexts">Специальные предложения</h1>
      <div className="offers">
        <Offer />
        <Offer />
      </div>
    </div>
  );
}

export default SpecialOffers;
