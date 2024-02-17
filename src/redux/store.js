import { combineReducers, createStore } from 'redux';
import { productsReducer } from './products/products.reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

////Типу стейт////
const rootReducer = combineReducers({
  productsStore: productsReducer,
});

////Створюємо розширення стора, щоб додати інструменти розробника////
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
