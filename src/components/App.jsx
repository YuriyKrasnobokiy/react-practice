const prodData = [
  { id: 'id-1', name: 'JS for beginners', price: 10, discount: 2 },
  { id: 'id-2', name: 'React basics', price: 11, discount: null },
  { id: 'id-3', name: 'React Router overview', price: 12, discount: 6 },
  { id: 'id-4', name: 'Redux in depth', price: 13, discount: null },
];

export const App = () => {
  return (
    <div>
      {prodData.map(prod => {
        return (
          <Product
            key={prod.id}
            name={prod.name}
            price={prod.price}
            discount={prod.discount}
          />
        );
      })}
      {/* <Product name="Tacos With Lime" price="10.99" discount={null} />
      <Product name="Tacos L" price="7.57" discount="2.5" />
      <Product name="Tacos S" price="4.58" discount="3" /> */}
    </div>
  );
};

const Product = ({ name, price, discount }) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        alt="Tacos With Lime"
        width={640}
      />
      <h1>{name}</h1>
      {/* {discount && <h2>Discount: {discount}$</h2>} */}
      {/* //АБО// */}
      {discount ? (
        <h2>Discount: {discount}$</h2>
      ) : (
        <p>Sorry, but discount on this product has ended ☹</p>
      )}
      <h2>Price: {price}</h2>
      <button type="button">Add to cart</button>
    </div>
  );
};
