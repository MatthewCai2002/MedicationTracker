import "./NavBar.css";

function NavBar() {
  return (
    <div className="header-container">
      <span className="logo"> ReMind</span>
        <ul className="ul-container">
          <li>
            <a>
              Home
            </a>
          </li>
          <li>
            <a>
               About Us
            </a>
          </li>
          <li>
            <a>
               Features
            </a>
          </li>
          <li>
            <a>
               Contact
            </a>
          </li>
        </ul>
        <div className="account-container">
            <a>
                Log In
            </a>
            <a>
                Sign Up
            </a>
        </div>
    </div>
  );
}

export default NavBar;
