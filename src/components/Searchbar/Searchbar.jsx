import React, { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value: value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmited } = this.props;

    if (value === '') return;
    // *  Відправка значення value як string в state App
    onSubmited(value);
  };

  render() {
    const {
      Searchbar,
      SearchForm,
      SearchForm_button,
      SearchForm_button_label,
      SearchForm_input,
    } = css;

    return (
      <header className={Searchbar}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={SearchForm_button}>
            <MdSearch width="40" height="40" />
            <span className={SearchForm_button_label}>Search</span>
          </button>

          <input
            className={SearchForm_input}
            type="text"
            name="searchName"
            onChange={this.handleChange}
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmited: PropTypes.func.isRequired,
};
