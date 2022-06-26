import Modal from "../Utility/Modal/Modal";
import Button from "../Utility/Button/Button";
import facebookIcon from "../../../src/assets/icons/facebook-icon.svg";
import googleIcon from "../../../src/assets/icons/google-icon.svg";
import React from "react";
import "./LogIn.css";
import Form from "../Utility/Form/Form";

export default function LogIn({ className, toggleLogInModal }) {
  return (
    <Modal className={className} toggleModal={toggleLogInModal}>
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
        <Form>
          <a> Forgot your password?</a>
        </Form>
        <div className="modal-footer">
          <p>Don’t Have an Account?</p>
          <a>Sign Up</a>
        </div>
      </div>
    </Modal>
  );
}
