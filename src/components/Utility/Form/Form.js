import "./Form.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Form(props) {
  const accountLinkStyle = {
    textAlign: "center",
    fontFamily: 'var(--ff-main-font)',
    fontWeight: 'var(--ff-font-weight)',
    fontSize: 'var(--ff-font-size)',
    fontStyle: 'normal',
    letterSpacing: '1.5px',
    color: '#fff'
};

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required />
      </div>
      <div>
        <div className="password-entry">
          <label htmlFor="password">password</label>
          {props.children}
        </div>
        <input type="text" id="password" required />
      </div>
      <Link to="/account" className="base-button account-link"
      style={accountLinkStyle}>
        Submit
      </Link>
    </form>
  );
}
