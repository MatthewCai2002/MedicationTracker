import React from 'react'
import Form from '../Utility/Form/Form'
import Modal from '../Utility/Modal/Modal'

export default function SignUp({ className, toggleSignUpModal }) {
  return (
    <Modal className={className} toggleModal={toggleSignUpModal}>
        <div className="log-in-content">
        <h2> Sign Up </h2>
        <Form />
        <div className="modal-footer">
          <p>Already Have an Account?</p>
          <a>Log In</a>
        </div>
      </div>
    </Modal>
  )
}
