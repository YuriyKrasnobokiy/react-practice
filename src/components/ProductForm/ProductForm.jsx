import React, { Component } from 'react';
import css from './ProductForm.module.css';

export default class ProductForm extends Component {
  handleSubmit = evt => {};

  render() {
    return (
      <form className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Title:</p>
          <input className={css.formInput} type="text" />
        </label>

        <label className={css.formLabel}>
          <p className={css.labelText}>Price:</p>
          <input className={css.formInput} type="text" />
        </label>

        <label className={css.formLabel}>
          <input type="checkbox" /> Has discount?
        </label>

        <label className={css.formLabel}>
          <p className={css.labelText}>Discount:</p>
          <input className={css.formInput} type="text" />
        </label>

        <button type="submit">Add to cart</button>
      </form>
    );
  }
}
