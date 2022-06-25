import Modal from "../Utility/Modal/Modal";
import Button from "../Utility/Button/Button";
import facebookIcon from "../../../src/assets/icons/facebook-icon.svg";
import googleIcon from "../../../src/assets/icons/google-icon.svg";
import React from "react";
import "./LogIn.css";

export default function LogIn({ toggleLogInModal }) {
  return (
    <Modal toggleModal={toggleLogInModal}>
      <div className="log-in-content">
        <h2> Log In </h2>
        <div className="social-log-in">
          <Button>
            <img src={facebookIcon} alt="facebook icon" className="icon" />
            <span>Log in with Facebook</span>
          </Button>
          <Button>
            <img src={googleIcon} alt="google icon" className="icon" />
            <span>Log in with Google</span>
          </Button>
        </div>
        <p>or</p>
        <form className="log-in-form">
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" required/>
          </div>
          <div>
            <div className="password-entry">
              <label for="password">password</label>
              <a> Forgot your password?</a>
            </div>
            <input type="text" id="password" required/>
          </div>
          <input
            className="base-button submit-btn"
            type="submit"
            value="Log In"
          />
        </form>
        <div className="modal-footer">
          <p>Don’t Have an Account?</p>
          <a>Sign Up</a>
        </div>
      </div>
    </Modal>
  );
}
