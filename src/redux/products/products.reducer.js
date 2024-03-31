import { createSlice } from '@reduxjs/toolkit';

// const productsData = [
//   {
//     id: 'qreqetqb',
//     title: 'Tacos With Lime XL',
//     price: 10.99,
//     discount: 2,
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
