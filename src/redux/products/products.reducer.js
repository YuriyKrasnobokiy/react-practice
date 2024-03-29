import { createSlice } from '@reduxjs/toolkit';

// const productsData = [
//   {
//     id: 'qreqetqb',
//     title: 'Tacos With Lime XL',
//     price: 10.99,
//     discount: 2,
//   },
//   {
//     id: 'hfkfhkdh',
//     title: 'Tacos With Lime L',
//     price: 8.99,
//     discount: null,
//   },
//   {
//     id: 'dfhfcwtx',
//     title: 'Tacos With Lime',
//     price: 6.99,
//     discount: 6,
//   },
//   {
//     id: 'zvzvdedw',
//     title: 'Tacos With Lime S',
//     price: 2.99,
//     discount: 0.5,
//   },
//   {
//     id: 'diqrwmsk',
//     title: 'Tacos With Cheese',
//     price: 7.99,
//     discount: null,
//   },
//   {
//     id: 'thskifhf',
//     title: 'Tacos With Cheese L',
//     price: 9.99,
//     discount: 1.5,
//   },
// ];

////Початковий стан редюсера (обов'язково!!!)////

const initialState = {
  ////Дані беруть або зі сховища або стандартні з масиву об'єктів productsData////
  // products: JSON.parse(localStorage.getItem('products')) ?? productsData,
  products: [],
  isLoading: false,
  error: null,
  filterTerm: '',
};

const productsSlice = createSlice({
  // Ім'я слайсу
  name: 'products',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    setFilterTerm(state, action) {
      state.filterTerm = action.payload;
    },
    addProduct(state, action) {
      // state.products = [...state.products, action.payload];
      //або//
      state.products.push(action.payload);
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        product => product.id !== action.payload
      );
    },
  },
});

// Генератори екшен кріейтерів
export const { addProduct, deleteProduct, setFilterTerm } =
  productsSlice.actions;
// Редюсер слайсу
export const productsReducer = productsSlice.reducer;
