import React, { useState } from 'react';
import css from './ProductForm.module.css';

//////Контрольована форма///////////
const ProductForm = ({ handleAddProduct }) => {
  // state = {
  //   title: '',
  //   price: '',
  //   hasDiscount: false,
  //   discount: '',
  // };

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discount, setDiscount] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const productData = {
      title,
      price: Number.parseFloat(price),
      discount: hasDiscount ? Number.parseFloat(discount) : null,
    };

    handleAddProduct(productData);

    setTitle('');
    setPrice('');
    setHasDiscount(false);
    setDiscount('');
  };

  const handleInputChange = evt => {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

    const name = evt.target.name;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'hasDiscount':
        setHasDiscount(value);
        break;
      case 'discount':
        setDiscount(value);
        break;
      default:
        break;
    }
    // this.setState({
    //   [name]: value,
    // });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {title === 'Spaghetti' && (
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
          onChange={handleInputChange}
          value={title}
        />
      </label>

      <label className={css.formLabel}>
        <p className={css.labelText}>Price:</p>
        <input
          className={css.formInput}
          type="text"
          name="price"
          onChange={handleInputChange}
          value={price}
        />
      </label>

      <label className={css.formLabel}>
        <input
          type="checkbox"
          name="hasDiscount"
          onChange={handleInputChange}
          checked={hasDiscount}
        />
        {''}
        Has discount?
      </label>

      {hasDiscount ? (
        <label className={css.formLabel}>
          <p className={css.labelText}>Discount:</p>
          <input
            className={css.formInput}
            type="text"
            name="discount"
            onChange={handleInputChange}
            value={discount}
          />
        </label>
      ) : null}

      <button type="submit">Add</button>
    </form>
  );
};

export default ProductForm;
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
