import axios from 'axios';
import React, { Component } from 'react';
import css from './AppWithRequests.module.css';

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
      console.log(error);
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
        {this.state.isLoading && <p>Loading...</p>}
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
