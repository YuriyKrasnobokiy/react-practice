import axios from 'axios';
import React, { Component } from 'react';
import css from './AppWithRequests.module.css';
import { Loader } from './Loader/Loader';

export class AppWithRequests extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
  };

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.setState({
        posts: data,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div className={css.postListWrapper}>
        <h2>HTTP requests</h2>
        {this.state.error !== null && (
          <p className={css.errorMessage}>
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <ul className={css.postList}>
          {this.state.posts !== null &&
            this.state.posts.map(post => {
              return (
                <li key={post.id} className={css.postItem}>
                  <h2 className={css.itemTitle}>{post.title}</h2>
                  <p className={css.itemBody}>{post.body}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
