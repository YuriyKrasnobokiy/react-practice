import { Product } from '../components/Product/Product';
import css from '../components/App.module.css';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import { nanoid } from 'nanoid';
import Modal from '../components/Modal/Modal';

const productsData = [
  {
    id: 'qreqetqb',
    title: 'Tacos With Lime XL',
    price: 10.99,
    discount: 2,
  },
  {
    id: 'hfkfhkdh',
    title: 'Tacos With Lime L',
    price: 8.99,
    discount: null,
  },
  {
    id: 'dfhfcwtx',
    title: 'Tacos With Lime',
    price: 6.99,
    discount: 6,
  },
  {
    id: 'zvzvdedw',
    title: 'Tacos With Lime S',
    price: 2.99,
    discount: 0.5,
  },
  {
    id: 'diqrwmsk',
    title: 'Tacos With Cheese',
    price: 7.99,
    discount: null,
  },
  {
    id: 'thskifhf',
    title: 'Tacos With Cheese L',
    price: 9.99,
    discount: 1.5,
  },
];

////Class Component////
export const ProductsPage = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  /////ПРИ ОНОВЛЕННІ СТОРІНКИ ПЕРЕВІРКА ЧИ КОРИСТУВАЧ НОВИЙ ТА ЩО ПОКАЗУВАТИ. АБО ЗА ЗАМОВЧУВАННЯМ МАСИВ (productsData) АБО ЙОГО ПРОДУКТИ/////
  const [products, setProducts] = useState(() => {
    const stringifiedProducts = localStorage.getItem('products');
    const parsedProducts = JSON.parse(stringifiedProducts) ?? productsData;
    return parsedProducts;
  });

  /////ПРИ ЗМІНІ МАСИВУ ПРОДУКТІВ ЙДЕ ЗАПИС У ЛОКАЛЬНЕ СХОВИЩЕ/////
  useEffect(() => {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem('products', stringifiedProducts);
  }, [products]);

  //////ЗМЕНШЕННЯ ЛІЧИЛЬНИКА//////
  const handleDecrement = () => {
    if (counterValue === 0) {
      alert('Counter value is already decremented!');
      return;
    }
    setCounterValue(prevState => prevState - 1);
    //OR//
    // this.setState({ counterValue: this.state.counterValue - 1 });
  };

  //////ЗБІЛЬШЕННЯ ЛІЧИЛЬНИКА//////
  const handleIncrement = () => {
    setCounterValue(prevState => prevState + 1);
    //OR//
    // this.setState({ counterValue: this.state.counterValue + 1 });
  };

  //////ВИДАЛЕННЯ ПРОДУКТУ//////
  const handleDeleteProduct = productId => {
    setProducts(products.filter(product => product.id !== productId));
  };
  //////ДОДАВАННЯ ПРОДУКТУ//////
  const handleAddProduct = productData => {
    const hasDuplicates = products.some(
      product => product.title === productData.title
    );

    if (hasDuplicates) {
      alert(`Oops! Product with title '${productData.title}' already exists`);
      return;
    }

    const finalProduct = {
      ...productData,
      id: nanoid(),
    };

    setProducts([...products, finalProduct]);
    //OR//
    // setProducts(prevState => [...prevState, finalProduct])
  };
  //////ВІДКРИТТЯ МОДАЛКИ//////
  const openModal = someDataToModal => {
    setIsOpenModal(true);
    setModalData(someDataToModal);
  };

  //////ЗАКРИТТЯ МОДАЛКИ//////
  const closeModal = () => {
    setIsOpenModal(false);
    setModalData(null);
  };

  //СОРТУВАННЯ ПРОДУКТІВ: ПЕРШІ ЗІ ЗНИЖКОЮ ЙДУТЬ//
  const sortedProducts = [...products].sort((a, b) => b.discount - a.discount);
  //////////////
  return (
    <div>
      <Section title="Hello and counter">
        <h1>Hello</h1>
        {counterValue >= 5 && (
          <h3>
            🎉 Congrats! You won the discount promocode 30% OFF #DW13S4RE7 🎊
          </h3>
        )}
        <button onClick={handleDecrement}>Decrement</button>
        <b>Counter Value: {counterValue}</b>
        <button onClick={handleIncrement}>Increment</button>
      </Section>

      <Section title="Product Form">
        <ProductForm handleAddProduct={handleAddProduct} />
      </Section>

      <Section title="Product List">
        <div className={css.productList}>
          {sortedProducts.map(product => {
            return (
              <Product
                key={product.id}
                title={product.title}
                id={product.id}
                price={product.price}
                discount={product.discount}
                handleDeleteProduct={handleDeleteProduct}
                openModal={openModal}
              />
            );
          })}
        </div>
      </Section>
      {isOpenModal && (
        <Modal closeModal={closeModal} modalData={modalData}></Modal>
      )}
    </div>
  );
};
