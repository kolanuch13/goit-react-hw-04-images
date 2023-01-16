import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root')

const Modal = ({link, name, modalClick}) => {
    // componentDidMount() {
    //     window.addEventListener('keydown', this.handleKeyDown);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('keydown', this.handleKeyDown);
    // }

    // handleKeyDown = evt => {
    //     if (evt.code === 'Escape') {
    //         this.props.onClose();
    //     }
    // }

    // handleModalClick = evt => {
    //     if (evt.currentTarget === evt.target) {
    //         this.props.onClose();
    //     }
    // }

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