import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types';
import { useState } from "react";

import css from "./ImageGalleryItem.module.css"


const ImageGalleryItem = ({samallPicture, name, largePicture}) => {
    let [modal, setModal] = useState(false);

    return (
        <>
            <li className={css.Item} onClick={() => setModal(modal = true)}>
                <img src={samallPicture} alt={name} className={css.Picture}/>
            </li>
            {modal && (<Modal onClose={() => setModal(modal = false)} link={largePicture} alt={name} />)}
        </>
    )
};

ImageGalleryItem.propTypes = {
    samallPicture: PropTypes.string.isRequired,
    largePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default ImageGalleryItem;
