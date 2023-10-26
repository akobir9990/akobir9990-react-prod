import "./store.css";
import map from "../../assets/images/map.svg";

function OurStores() {
  return (
    <div className="container mapContainer">
      <div className="titleTexts">Наши магазины</div>
      <div className="mapBtns">
        <button className="mapBtn">п.Щельяюр</button>
        <button className="mapBtn">д.Вертеп</button>
        <button className="mapBtn">с.Краснобор</button>
        <button className="mapBtn">д.Диюр</button>
      </div>
      <div className="map">
        <img src={map} alt="" />
      </div>
    </div>
  );
}

export default OurStores;
