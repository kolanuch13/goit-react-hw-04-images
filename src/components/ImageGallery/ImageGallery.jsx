import PropTypes from 'prop-types';
import css from "./ImageGallery.module.css"

import Button from "components/Button/Button";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({pictureArray, onClick}) => {
    return (
        <section className={css.Section}>
            <div className={css.Section}>
                <ul className={css.Gallery}>
                    {pictureArray.map(({id, webformatURL, largeImageURL, tags }) =>
                        <ImageGalleryItem
                            key={id}
                            samallPicture={webformatURL}
                            largePicture={largeImageURL}
                            name={tags}
                        />
                    )}
                </ul>
                {pictureArray.length >= 12 && <Button onClick={onClick} />}
            </div>
        </section>
    )    
};

ImageGallery.propTypes = {
    pictureArray: PropTypes.array.isRequired,
}

export default ImageGallery;