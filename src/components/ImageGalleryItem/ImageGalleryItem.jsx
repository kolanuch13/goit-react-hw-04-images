import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types';
import { useState } from "react";

import css from "./ImageGalleryItem.module.css"

// window.removeEventListener('keydown', this.handleKeyDown);

const ImageGalleryItem = ({samallPicture, name, largePicture}) => {
    const [modal, setModal] = useState(false);

    const togleModal = evt => {
        if (!modal) {
            setModal(true)
        } else if (evt.currentTarget === evt.target || evt.code === 'Escape') {
            setModal(false);
        }
  };
    
    return (
        <>
            <li className={css.Item} onClick={togleModal}>
                <img src={samallPicture} alt={name} className={css.Picture} />
            </li>
            {modal && (
                <Modal modalClick={togleModal} link={largePicture} alt={name} />
            )}
        </>
    );
};

ImageGalleryItem.propTypes = {
    samallPicture: PropTypes.string.isRequired,
    largePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default ImageGalleryItem;
