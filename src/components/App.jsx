import { Product } from './Product/Product';
import css from './App.module.css';
import Section from './Section/Section';

const prodData = [
  {
    id: 'id-1',
    name: 'Tacos With Lime XL',
    price: 10.99,
    discount: 2,
  },
  {
    id: 'id-2',
    name: 'Tacos With Lime L',
    price: 8.99,
    discount: null,
  },
  {
    id: 'id-3',
    name: 'Tacos With Lime Regular',
    price: 6.99,
    discount: 6,
  },
  {
    id: 'id-4',
    name: 'Tacos With Lime S',
    price: 2.99,
    discount: 0.5,
  },
  {
    id: 'id-5',
    name: 'Tacos With Cheese Regular',
    price: 7.15,
    discount: null,
  },
  {
    id: 'id-6',
    name: 'Tacos With Cheese L',
    price: 2.99,
    discount: 0.5,
  },
];

export const App = () => {
  return (
    <>
      <Section>
        <h1>Hello</h1>
      </Section>
      <Section>
        <div className={css.productList}>
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
      </Section>
    </>
  );
};
