import { Product } from '../components/Product/Product';
import css from '../components/App.module.css';
import Section from '../components/Section/Section';
import { useState } from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import { nanoid } from 'nanoid';
import Modal from '../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/products/products.reducer';
import Filter from 'components/Filter/Filter';
import { selectIsOpenModal } from '../redux/modal/modal.selectors';
import {
  selectFilteredProducts,
  selectProducts,
  // selectProductsFilterTerm,
} from '../redux/products/products.selectors';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [counterValue, setCounterValue] = useState(0);
  const isOpenModal = useSelector(selectIsOpenModal);
  // const filterTerm = useSelector(selectProductsFilterTerm);
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  /////ПРИ ОНОВЛЕННІ СТОРІНКИ ПЕРЕВІРКА ЧИ КОРИСТУВАЧ НОВИЙ ТА ЩО ПОКАЗУВАТИ. АБО ЗА ЗАМОВЧУВАННЯМ МАСИВ (productsData) АБО ЙОГО ПРОДУКТИ/////
  // const [products, setProducts] = useState(() => {
  //   const stringifiedProducts = localStorage.getItem('products');
  //   const parsedProducts = JSON.parse(stringifiedProducts) ?? productsData;
  //   return parsedProducts;
  // });

  ///ПРИ ЗМІНІ МАСИВУ ПРОДУКТІВ ЙДЕ ЗАПИС У ЛОКАЛЬНЕ СХОВИЩЕ/////
  // useEffect(() => {
  //   const stringifiedProducts = JSON.stringify(products);
  //   localStorage.setItem('products', stringifiedProducts);
  // }, [products]);

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
    // const deleteProductAction = {
    //   type: 'products/deleteProduct',
    //   payload: productId,
    // };

    dispatch(deleteProduct(productId));
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

    // const addProductAction = {
    //   type: 'products/addProduct',
    //   payload: finalProduct,
    // };
    dispatch(addProduct(finalProduct));
  };

  // ////ФІЛЬТРАЦІЯ ПРОДУКТІВ////
  // const filteredProducts = products.filter(
  //   ({ title, price }) =>
  //     title.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
  //     price.toString().includes(filterTerm.toLowerCase().trim())
  // );
  //////ДЛЯ ОПТИМІЗАЦІЇ МОЖНА ВИКОРИСТАТИ МЕМОЇЗАЦІЮ////
  // const filteredProducts = useMemo(
  //   () =>
  //     products.filter(
  //       ({ title, price }) =>
  //         title.toLowerCase().include  s(filterTerm.toLowerCase().trim()) ||
  //         price.toString().includes(filterTerm.toLowerCase().trim())
  //     ),
  //   [filterTerm, products]
  // );

  ////СОРТУВАННЯ ПРОДУКТІВ: ПЕРШІ ЗІ ЗНИЖКОЮ ЙДУТЬ////
  const sortedProducts = [...filteredProducts].sort(
    (a, b) => b.discount - a.discount
  );
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

      <Section title="Filter Product">
        <Filter />
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
              />
            );
          })}
        </div>
      </Section>
      {isOpenModal && <Modal />}
    </div>
  );
};

export default ProductsPage;
