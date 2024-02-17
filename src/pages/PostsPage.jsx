import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './PostPage.module.css';

const PostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedPost, setSearchedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryValue = searchParams.get('query');
  const location = useLocation();
  // console.log('location: ', location);
  const handleSubmit = e => {
    e.preventDefault();

    const value = e.currentTarget.elements.searchKey.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) {
      return;
    }

    const fetchSearchedPost = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${queryValue}`
        );

        ////частіше достатньо  setSearchedPost(data), але якшо може бути декілька то так:////
        setSearchedPost([data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchedPost();
  }, [queryValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Search posts by id: </span>
          <input name="searchKey" type="text" placeholder="12" required />
        </label>
        <button type="submit">Search post</button>
      </form>
      {error !== null && <p className={css.errorMessage}>{error}</p>}
      {isLoading && <Loader />}
      {searchedPost !== null && (
        <div className={css.listWrapper}>
          <ul className={css.postList}>
            {searchedPost.map(post => {
              return (
                <Link
                  key={post.id}
                  state={{ from: location }}
                  to={`/posts/${post.id}`}
                >
                  <li className={css.postItem}>
                    <h2 className={css.itemTitle}>{post.title}</h2>
                    <p className={css.itemBody}>{post.body}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
