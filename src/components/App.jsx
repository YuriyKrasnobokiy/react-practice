import { Product } from './Product/Product';
import css from './App.module.css';
import Section from './Section/Section';
import { Component } from 'react';

const productsData = [
  {
    id: 'qreqetqb',
    name: 'Tacos With Lime XL',
    price: 10.99,
    discount: 2,
  },
  {
    id: 'hfkfhkdh',
    name: 'Tacos With Lime L',
    price: 8.99,
    discount: null,
  },
  {
    id: 'dfhfcwtx',
    name: 'Tacos With Lime',
    price: 6.99,
    discount: 6,
  },
  {
    id: 'zvzvdedw',
    name: 'Tacos With Lime S',
    price: 2.99,
    discount: 0.5,
  },
  {
    id: 'diqrwmsk',
    name: 'Tacos With Cheese',
    price: 7.99,
    discount: null,
  },
  {
    id: 'thskifhf',
    name: 'Tacos With Cheese L',
    price: 9.99,
    discount: 1.5,
  },
];

////Class Component////
export class App extends Component {
  state = {
    counterValue: 0,
    products: productsData,
  };

  handleDecrement = () => {
    if (this.state.counterValue === 0) {
      alert('Counter value is already decremented!');
      return;
    }
    this.setState(prevState => {
      return {
        counterValue: prevState.counterValue - 1,
      };
    });
    //OR//
    // this.setState({ counterValue: this.state.counterValue - 1 });
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        counterValue: prevState.counterValue + 1,
      };
    });
    //OR//
    // this.setState({ counterValue: this.state.counterValue + 1 });
  };

  handleDeleteProduct = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId),
    });
  };

  render() {
    //СОРТУВАННЯ ПРОДУКТІВ: ПЕРШІ ЗІ ЗНИЖКОЮ ЙДУТЬ//
    const sortedProducts = [...this.state.products].sort(
      (a, b) => b.discount - a.discount
    );
    //////////////
    return (
      <>
        <Section>
          <h1>Hello</h1>
          {this.state.counterValue >= 5 && (
            <h3>
              🎉 Congrats! You won the discount promocode 30% OFF #DW13S4RE77 🎊
            </h3>
          )}
          <button onClick={this.handleDecrement}>Decrement</button>
          <b>Counter Value: {this.state.counterValue}</b>
          <button onClick={this.handleIncrement}>Increment</button>
        </Section>
        <Section>
          <div className={css.productList}>
            {sortedProducts.map(product => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  id={product.id}
                  price={product.price}
                  discount={product.discount}
                  handleDeleteProduct={this.handleDeleteProduct}
                />
              );
            })}
          </div>
        </Section>
      </>
    );
  }
}

//Functional Component//
// export const App = () => {
//   return (
//     <>
//       <Section>
//         <h1>Hello</h1>
//       </Section>
//       <Section>
//         <div className={css.productList}>
//           {prodData.map(prod => {
//             return (
//               <Product
//                 key={prod.id}
//                 name={prod.name}
//                 price={prod.price}
//                 discount={prod.discount}
//               />
//             );
//           })}
//           {/* <Product name="Tacos With Lime" price="10.99" discount={null} />
//       <Product name="Tacos L" price="7.57" discount="2.5" />
//       <Product name="Tacos S" price="4.58" discount="3" /> */}
//         </div>
//       </Section>
//     </>
//   );
// };
