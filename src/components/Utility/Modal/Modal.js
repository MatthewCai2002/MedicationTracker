import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal(props) {
    const modalRef = useRef()
    useEffect(() => {
        const closeModal = (e) => {
            if (e.path[0] !== modalRef.current) {
                props.toggleModal(true)
            }
        };

        document.body.addEventListener('click', closeModal);
        return () => document.body.removeEventListener('click', closeModal)

    }, []);

  return createPortal(
      <div className="modal-background">
        <div ref={modalRef} className="modal-container">
            <button onClick={() => props.toggleModal(true)} className="close-modal-btn">
            </button>
            {props.children}
        </div>
      </div>,
    document.getElementById("logInPortal")
  );
}

export default Modal;
