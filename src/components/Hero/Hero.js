import NavBar from "../NavBar/NavBar";
import heroImage from "../../assets/images/Hero-Image.svg";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <NavBar logInOpen={props.logInState.state} signUpOpen={props.signUpState.state} toggleLogInModal={props.logInState.toggle} toggleSignUpModal={props.signUpState.toggle}/>
      <div className="hero-content" id="about">
        <img src={heroImage} alt="Hero Image" />
        <div className="all-hero-text">
          <div className="hero-text">
            <h2>Never Forget Again.</h2>
            <span>
              Use ReMind to track your medication compliance and set repeatable
              notifications so you never miss a dosage again.
            </span>
          </div>
          <button onClick={props.signUpState.toggle} className="get-started-hero"> Get Started </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
