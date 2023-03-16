import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = { showModal: false };

  handleClickImg = () => {
    this.setState({ showModal: true });
  };

  onCloseModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target)
      this.setState({ showModal: false });
  };

  render() {
    const { ImageGalleryItem__image } = css;

    const {
      gallery: { webformatURL, tags, largeImageURL },
    } = this.props;

    const { showModal } = this.state;

    return (
      <>
        <img
          src={webformatURL}
          alt={tags}
          className={ImageGalleryItem__image}
          onClick={this.handleClickImg}
        />
        {showModal && (
          <Modal onCloseModal={this.onCloseModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  gallery: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
};
