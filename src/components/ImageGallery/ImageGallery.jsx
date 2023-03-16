import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallerys }) {
  return (
    <ul className={css.ImageGalleryStyle}>
      {gallerys.map(gallery => (
        <li className={css.ImageGalleryItem} key={gallery.id}>
          <ImageGalleryItem gallery={gallery} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallerys: PropTypes.array.isRequired,
};
