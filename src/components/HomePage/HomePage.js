import { createContext, useState } from "react";
import Hero from "../Hero/Hero";
import profilePic from "./fetchimage.webp";
import githubIcon from "./github-brands.svg";
import emailIcon from "./envelope-solid.svg";
import instaIcon from "./instagram-brands.svg";
import feature1Image from "./feature-1-image.svg";
import feature2Image from "./feature-2-image.svg";
import "./HomePage.css";
import Modal from "../Utility/Modal/Modal";

function HomePage() {
  return (
    <div className="home-page-container">
        <Hero />
      <div className="home-page-content">
        <div className="feature1-container" id="feature">
          <img src={feature1Image} alt="phone notification image" />
          <div className="feature-1-text">
            <h2>Manage your reminders anywhere</h2>
            <span>
              Whether you're at home or on mobile you can access and manage your
              alerts on any device, from anywhere, all from your browser
            </span>
          </div>
        </div>
        <div className="feature2-container">
          <img src={feature2Image} alt="account page image" />
          <div className="feature-2-text">
            <h2>Always Know your Progress</h2>
            <span>
              See which days you’ve missed a dose plus your weekly, monthly,
              yearly, and total compliance all in one place
            </span>
            <button className="get-started-feature"> Get Started </button>
          </div>
        </div>

        <div className="contact-container" id="contact">
          <div className="about-me-info">
            <h2>About Me</h2>
            <span>
              Hi! I’m Matthew a third year Computer Science student who loves to
              learn about and create new things. This is my first web app so I
              hope you had a great experience and that it’s helped you out a
              little bit!
            </span>
            <div className="icon-container">
              <img src={githubIcon} alt="github icon" />
              <img src={instaIcon} alt="instagram icon" />
              <img src={emailIcon} alt="email icon" />
            </div>
          </div>
          <img src={profilePic} className="monke" alt="monkey" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
