import { useState } from "react";
import "./NavBar.css";

function NavBar(props) {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="header-container">
      <span className="logo"> ReMind</span>
      <button
        onClick={toggleMobileNav}
        className={mobileNav ? "mobile-nav-active" : "mobile-nav-toggle"}
      >
      </button>
      <nav
        className={
          mobileNav ? "primary-navigation-active" : "primary-navigation"
        }
      >
        <ul id="navigation-container" className="navigation-container">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <div id="account-container" className="account-container">
          <a>Log In</a>
          <a>Sign Up</a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
