import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

function Modal(props) {
    // const cname = "modal-background " + props.className;
  const modalRef = useRef();
  // useEffect(() => {
  //   const closeModal = (e) => {
  //     if (e.path[0] !== modalRef.current) {
  //       props.toggleModal(true);
  //     }
  //   };

  //   document.body.addEventListener("click", closeModal);
  //   return () => document.body.removeEventListener("click", closeModal);
  // }, []);

  return createPortal(
    <div className={props.className}>
      <div ref={modalRef} className="modal-container">
        <div className="close-modal">
          <button
            onClick={() => props.toggleModal(true)}
            className="close-modal-btn"
          ></button>
        </div>
        {props.children}
      </div>
    </div>,
    document.getElementById("modalPortal")
  );
}

export default Modal;
