import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";

import css from "./ImageGalleryItem.module.css"

// window.removeEventListener('keydown', this.handleKeyDown);


const ImageGalleryItem = ({samallPicture, name, largePicture}) => {
    let [modal, setModal] = useState(false);

    const handleOpen = evt => {
        setModal(true);
        if (evt.target === evt.currentTarget || evt.code === 'Escape') {
            setModal(() => false);
        }
    }

    if (modal) {
        window.addEventListener('keydown', handleOpen);
    } else {
        window.removeEventListener('keydown', handleOpen);
    }
    
    return (
        <>
            <li className={css.Item} onClick={handleOpen}>
                <img src={samallPicture} alt={name} className={css.Picture} />
            </li>
            {modal && (
                <Modal
                    modalClick={handleOpen}
                    link={largePicture}
                    alt={name}
                />
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
