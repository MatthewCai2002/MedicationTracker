import Hero from "../Hero/Hero";
import GetStartedBtn from "../Utility/GetStartedBtn/GetStartedBtn";
import feature1Image from "./feature-1-image.svg";
import feature2Image from "./feature-2-image.svg";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <Hero />
      <div className="home-page-content">
        <div className="feature1-container">
          <img src={feature1Image} alt="phone notification image" />
          <h2>Manage your reminders anywhere</h2>
          <span>
            Whether you're at home or on mobile you can access and manage your alerts on any device,
            from anywhere, all from your browser
          </span>
        </div>
        <div className="feature2-container">
          <img src={feature2Image} alt="account page image" />
          <h2>Always Know your Progress</h2>
          <span>
            See which days you’ve missed a dose plus your weekly, monthly,
            yearly, and total compliance all in one place
          </span>
          <button className="get-started-feature"> Get Started </button>
        </div>
    
        <div className="contact-container">
          <h2>
            Eu aliqua id eu et dolor culpa cupidatat eiusmod officia deserunt
            enim.
          </h2>
          <span>
            Laborum id anim ad excepteur cillum. Commodo labore ipsum anim
            proident cupidatat cupidatat dolore. Est non labore et et ullamco
            amet qui aute cupidatat ullamco. Officia Lorem culpa cillum
            cupidatat. Magna mollit velit commodo non pariatur sunt non do irure
            et laborum.
          </span>
          <img />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
