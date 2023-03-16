import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onCloseModal);
  }

  render() {
    const { children } = this.props;

    const { Overlay, Modal } = css;

    return createPortal(
      <div className={Overlay} onClick={this.props.onCloseModal}>
        <div className={Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
