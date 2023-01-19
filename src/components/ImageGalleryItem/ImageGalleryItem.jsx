import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types';
// import { useEffect } from "react";
import { useState, useEffect } from "react";

import css from "./ImageGalleryItem.module.css"

// window.removeEventListener('keydown', this.handleKeyDown);

const ImageGalleryItem = ({samallPicture, name, largePicture}) => {
    const [modal, setModal] = useState(false);

    const togleModal = () => {
        setModal(!modal)
    }

    useEffect(() => {
        if (modal) {
            window.addEventListener('keydown', togleModal);
        } else if (!modal) {
            window.removeEventListener('keydown', togleModal);
        } 
    },[modal])
    
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
