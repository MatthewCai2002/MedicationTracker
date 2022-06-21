import Hero from "../Hero/Hero";
import githubIcon from "./github-brands.svg";
import emailIcon from "./envelope-solid.svg";
import instaIcon from "./instagram-brands.svg";
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
            Whether you're at home or on mobile you can access and manage your
            alerts on any device, from anywhere, all from your browser
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
          <h2>About Me</h2>
          <span>
            Hi! I’m Matthew a third year Computer Science student who loves to
            learn about and create new things. This is my first web app so I
            hope you had a great experience and that it’s helped you out a
            little bit!
          </span>
          <div className="icon-container">
            <img src={githubIcon} alt="github icon"/>
            <img src={instaIcon} alt="instagram icon"/>
            <img src={emailIcon} alt="email icon"/>
          </div>
          <img />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
