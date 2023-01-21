import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { useEffect } from "react";

import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root')

const Modal = ({ link, name, modalClick }) => {
    
    useEffect(() => {
        window.addEventListener('keydown', modalClick);
        return () => {
            window.removeEventListener('keydown', modalClick);
        };
    }, [modalClick]);

    return createPortal(
        <div className={css.Overlay} onClick={modalClick}>
            <div className={css.Modal}>
                <img src={link} alt={name} />
            </div>
        </div>, modalRoot
    )

}

Modal.protoTypes = {
    modalClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default Modal;