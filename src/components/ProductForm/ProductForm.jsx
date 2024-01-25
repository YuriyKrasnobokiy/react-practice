import React, { Component } from 'react';
import css from './ProductForm.module.css';

export default class ProductForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const title = evt.currentTarget.elements.title.value;
    const price = evt.currentTarget.elements.price.value;
    const hasDiscount = evt.currentTarget.elements.hasDiscount.checked;
    const discount = evt.currentTarget.elements.discount.value;

    const productData = {
      title,
      price: Number.parseFloat(price),
      discount: hasDiscount ? Number.parseFloat(discount) : null,
    };
    this.props.handleAddProduct(productData);

    console.log('Form successfully submitedn 😀', productData);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Title:</p>
          <input className={css.formInput} type="text" name="title" />
        </label>

        <label className={css.formLabel}>
          <p className={css.labelText}>Price:</p>
          <input className={css.formInput} type="text" name="price" />
        </label>

        <label className={css.formLabel}>
          <input type="checkbox" name="hasDiscount" /> Has discount?
        </label>

        <label className={css.formLabel}>
          <p className={css.labelText}>Discount:</p>
          <input className={css.formInput} type="text" name="discount" />
        </label>

        <button type="submit">Add</button>
      </form>
    );
  }
}
