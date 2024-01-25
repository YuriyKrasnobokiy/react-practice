import css from './Product.module.css';

export const Product = ({ name, price, discount }) => {
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
      <h1>{name}</h1>
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
        Add to cart
      </button>
    </div>
  );
};
