import React, { Component } from 'react';

import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GalleryApi from '../Utils/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const requestApi = new GalleryApi();

const notify = () => {
  toast('Not found', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export default class App extends Component {
  state = {
    gallerys: [],
    value: '',
    visibleSpinerBool: false,
    totalHits: 0,
  };

  handleWriteValueInStateOfSubmit = valueString => {
    this.setState({ value: valueString });
    requestApi.resetPage();
  };

  componentDidUpdate(_, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ visibleSpinerBool: true });
      requestApi.writeValue = this.state.value;

      requestApi
        .search()
        .then(({ data: { totalHits, hits } }) => {
          if (totalHits > 0) {
            // hits це масив
            // console.log(totalHits, total);
            this.setState({ gallerys: hits, totalHits });
          } else {
            notify();
          }
        })
        .catch(console.log)
        .finally(this.setState({ visibleSpinerBool: false }));
    }
  }

  handleLoadMore = () => {
    this.setState({ visibleSpinerBool: true });
    setTimeout(() => {
      requestApi
        .search()
        .then(({ data: { hits } }) => {
          this.setState(prevState => ({
            gallerys: [...hits, ...prevState.gallerys],
          }));
        })
        .catch(console.log)
        .finally(this.setState({ visibleSpinerBool: false }));
    }, 1000);
  };

  render() {
    const { gallerys, visibleSpinerBool, totalHits } = this.state;
    console.log(totalHits);

    return (
      <div className={css.App}>
        <Searchbar onSubmited={this.handleWriteValueInStateOfSubmit} />

        {visibleSpinerBool ? (
          <Loader visibleSpinerBool={visibleSpinerBool} />
        ) : (
          <ImageGallery gallerys={gallerys} />
        )}

        {gallerys.length !== totalHits && (
          <Button
            handleLoadMore={this.handleLoadMore}
            visibleSpinerBool={visibleSpinerBool}
          >
            Load More
          </Button>
        )}
        <ToastContainer />
      </div>
    );
  }
}
