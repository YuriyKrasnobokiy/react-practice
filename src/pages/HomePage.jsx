import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from '../pages/PostPage.module.css';

const HomePage = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={css.postListWrapper}>
      <h2>HTTP requests</h2>
      {error !== null && (
        <p className={css.errorMessage}>
          Oops, some error occured... Error message: {this.state.error}
        </p>
      )}
      {isLoading && <Loader />}
      <div className={css.listWrapper}>
        <ul className={css.postList}>
          {posts !== null &&
            posts.map(post => {
              return (
                <li key={post.id} className={css.postItem}>
                  <Link to={`/posts/${post.id}`}>
                    <h2 className={css.itemTitle}>{post.title}</h2>
                    <p className={css.itemBody}>{post.body}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
