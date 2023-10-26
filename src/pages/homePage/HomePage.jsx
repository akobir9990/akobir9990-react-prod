import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import fruits from "../../assets/images/fruits.svg";
import "./homePage.css";
import { Navigate } from "react-router-dom";
function HomePage(user, setUser) {
  const handleSubmit = () => {
    if (!user) {
      return <Navigate to="/secret" />;
    } else {
      return <Navigate to="/" />;
    }
  };
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
      <input
        type="text"
        name=""
        id="goToSecretPage"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleSubmit()} className="hack">
        Submit
      </button>
      <Footer />
    </div>
  );
}

export default HomePage;
