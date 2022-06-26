import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";

function NavBar({logInOpen, signUpOpen, toggleLogInModal, toggleSignUpModal}) {
  const [mobileNav, setMobileNav] = useState(false);
  
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="header-container" id="about">
      <LogIn className={logInOpen ? "modal-active" : "modal-inactive"}  onClick={toggleLogInModal} toggleLogInModal={toggleLogInModal}  />
      <SignUp className={signUpOpen ? "modal-active" : "modal-inactive"} onClick={toggleSignUpModal} toggleSignUpModal={toggleSignUpModal}  />
      <a className="logo"> ReMind</a>
      <button
        onClick={toggleMobileNav}
        className={mobileNav ? "mobile-nav-active" : "mobile-nav-toggle"}
      ></button>
      <nav
        className={
          mobileNav ? "primary-navigation-active" : "primary-navigation"
        }
      >
        <ul id="navigation-container" className="navigation-container">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div id="account-container" className="account-container">
          <a onClick={toggleLogInModal}>Log In</a>
          <a onClick={toggleSignUpModal}>Sign Up</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
