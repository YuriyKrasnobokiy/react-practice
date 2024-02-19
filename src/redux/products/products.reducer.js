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
};

const productsSlice = createSlice({
  // Ім'я слайсу
  name: 'products',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
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
export const { addProduct, deleteProduct } = productsSlice.actions;
// Редюсер слайсу
export const productsReducer = productsSlice.reducer;

// export const productsReducer = (state = initialState, action) => {
//   //action -> {type: 'products/deleteProduct, payload: 'w321'}
//   //action -> {type: 'products/addProduct, payload:{id: 'w321', price: 10, title: 'cabage', ...}}

//   ////За допомогою action.type визначаємо обробники (назва з голови, головне щоб унікальна)////
//   switch (action.type) {
//     ////Обробник для додавання продуктів////
//     case 'products/addProduct': {
//       // const state.products = [...state.products, action.payload]; ❌
//       return {
//         ...state,
//         products: [...state.products, action.payload], //✅
//       };
//     }

//     ////Обробник для видалення продуктів////
//     case 'products/deleteProduct': {
//       return {
//         ...state,
//         products: state.products.filter(
//           product => product.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const deleteProduct = payload => {
//   return {
//     type: 'products/deleteProduct',
//     payload,
//   };
// };

// export const addProduct = payload => {
//   return {
//     type: 'products/addProduct',
//     payload,
//   };
// };
