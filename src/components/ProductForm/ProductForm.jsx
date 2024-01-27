import React, { Component } from 'react';
import css from './ProductForm.module.css';

//////Контрольована форма///////////
export default class ProductForm extends Component {
  state = {
    title: '',
    price: '',
    hasDiscount: false,
    discount: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const hasDiscount = this.state.hasDiscount;

    const productData = {
      title: this.state.title,
      price: Number.parseFloat(this.state.price),
      discount: hasDiscount ? Number.parseFloat(this.state.discount) : null,
    };
    this.props.handleAddProduct(productData);

    // console.log('Form successfully submitedn 😀', productData);

    this.setState({ title: '', price: '', hasDiscount: false, discount: '' });
  };

  handleInputChange = evt => {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    const name = evt.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        {this.state.title === 'Spaghetti' && (
          <h3>
            🥳 Congrats! You won the discount promocode 20% OFF - #W4SD89R1 🤠
          </h3>
        )}
        <label className={css.formLabel}>
          <p className={css.labelText}>Title:</p>
          <input
            className={css.formInput}
            type="text"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </label>

        <label className={css.formLabel}>
          <p className={css.labelText}>Price:</p>
          <input
            className={css.formInput}
            type="text"
            name="price"
            onChange={this.handleInputChange}
            value={this.state.price}
          />
        </label>

        <label className={css.formLabel}>
          <input
            type="checkbox"
            name="hasDiscount"
            onChange={this.handleInputChange}
            checked={this.state.hasDiscount}
          />
          {''}
          Has discount?
        </label>

        {this.state.hasDiscount ? (
          <label className={css.formLabel}>
            <p className={css.labelText}>Discount:</p>
            <input
              className={css.formInput}
              type="text"
              name="discount"
              onChange={this.handleInputChange}
              value={this.state.discount}
            />
          </label>
        ) : null}

        <button type="submit">Add</button>
      </form>
    );
  }
}
///////////////////////////////////////////////////////

//////Неконтрольована форма///////////
// export default class ProductForm extends Component {
//   handleSubmit = evt => {
//     evt.preventDefault();
//     const title = evt.currentTarget.elements.title.value;
//     const price = evt.currentTarget.elements.price.value;
//     const hasDiscount = evt.currentTarget.elements.hasDiscount.checked;
//     const discount = evt.currentTarget.elements.discount.value;

//     const productData = {
//       title,
//       price: Number.parseFloat(price),
//       discount: hasDiscount ? Number.parseFloat(discount) : null,
//     };
//     this.props.handleAddProduct(productData);

//     console.log('Form successfully submitedn 😀', productData);
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css.formLabel}>
//           <p className={css.labelText}>Title:</p>
//           <input className={css.formInput} type="text" name="title" />
//         </label>

//         <label className={css.formLabel}>
//           <p className={css.labelText}>Price:</p>
//           <input className={css.formInput} type="text" name="price" />
//         </label>

//         <label className={css.formLabel}>
//           <input type="checkbox" name="hasDiscount" /> Has discount?
//         </label>

//         <label className={css.formLabel}>
//           <p className={css.labelText}>Discount:</p>
//           <input className={css.formInput} type="text" name="discount" />
//         </label>

//         <button type="submit">Add</button>
//       </form>
//     );
//   }
// }
///////////////////////////////////////////////////////
