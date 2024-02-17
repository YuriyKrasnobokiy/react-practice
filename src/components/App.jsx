import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const PostsPage = lazy(() => import('pages/PostsPage'));
const PostDetails = lazy(() => import('pages/PostDetails'));
const ProductsPage = lazy(() => import('pages/ProductsPage'));

// 1. Обгорнути весь App в компонент BrowserRouter
// 2. Прописати маршрути та компоненти Link|NavLink
// 3. Підготувати компоненти Route для кожноъ сторінки за певною адресою.
// 4. Якщо нам потрібно зробити шаблонну сторінку для багатьох однотипних даних,
//     нам потрібно використовувати динамічні параметри '/posts/:postId'
// 5. Щоб у користувача була змога потрабити на конкретну шаблонну сторінку
//     ми у компоненті Link або NavLink вказуємо маршрут наступним чином <Link to={`/posts/${post.id}`}>

// Етапи роботи з маршрутеризацією:
// 1. Змінити адресний рядок браузера за допомогою компонти Link або NavLink маршрут вказуємо
//    в (пропс to).
// 2. Підготувати компонент Route для відображення конкретної сторінки за певним
//    шляхом(пропс path).

// РЕМАРКА!!!
// Тег <a href="..." target="_blank" rel="noopener noreferrer"></a> Ми використовуємо для
//    всіх зовнішніх посиланнь(фейсбук, гугель, ютубе, інтаграми).
// Тег <NavLink to="..."></NavLink> або <Link to="..."></Link> Ми використовуємо виключно
//    для навігації всередині нашого додатку.

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId/*" element={<PostDetails />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
