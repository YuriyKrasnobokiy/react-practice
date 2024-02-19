import { useDispatch } from 'react-redux';
import css from './Product.module.css';
import { openModal } from '../../redux/modal/modal.reducer';
import { ReactComponent as IconTrash } from 'assets/icons/trashSvg.svg';

export const Product = ({
  title,
  price,
  discount,
  id,
  handleDeleteProduct,
}) => {
  const dispatch = useDispatch();

  const productBg = discount ? '#f37703' : '#a4dbe2';

  const productStyles = {
    backgroundColor: productBg,
  };

  return (
    <div className={css.product} style={productStyles}>
      <img
        className={css.productImg}
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
      />
      <h1 className={css.productTitle}>{title}</h1>
      {/* {discount && <h2>Discount: {discount}$</h2>} */}
      {/* //АБО// */}
      {discount ? (
        <h2 className={css.discount}>Discount: {discount}$</h2>
      ) : (
        <p className={css.apology}>
          Sorry, but discount on this product has expired ☹
        </p>
      )}
      <h2>Price: {price}</h2>
      <button className={css.poductBtn} type="button">
        Add product to cart
      </button>
      <button
        onClick={() => dispatch(openModal({ title, price, discount }))}
        className={css.poductBtn}
        type="button"
      >
        See the details
      </button>
      <button
        onClick={() => handleDeleteProduct(id)}
        className={css.poductBtn}
        type="button"
      >
        <IconTrash />
      </button>
    </div>
  );
};
