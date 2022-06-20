import NavBar from "../NavBar/NavBar";
import GetStartedBtn from "../Utility/GetStartedBtn/GetStartedBtn";
import heroImage from "./Hero-Image.svg";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <NavBar />
      <div className="hero-content">
        <img src={heroImage} alt="Hero Image" />
        <div className="hero-text">
          <h2>Never Forget Again.</h2>
          <span>
            Use ReMind to track your medication compliance and set repeatable
            notifications so you never miss a dosage again.
          </span>
        </div>
        <button className="get-started-hero"> Get Started </button>
      </div>
    </div>
  );
}

export default Hero;
