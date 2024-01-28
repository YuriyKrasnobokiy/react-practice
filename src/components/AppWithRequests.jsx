import axios from 'axios';
import React, { Component } from 'react';
import css from './AppWithRequests.module.css';
import { Loader } from './Loader/Loader';

// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// },

export class AppWithRequests extends Component {
  state = {
    posts: null,
    comments: null,
    isLoading: false,
    error: null,
    selectedPostId: null,
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

  fetchComments = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.state.selectedPostId}`
      );
      this.setState({
        comments: data,
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

  onSelectPostID = postId => {
    this.setState({
      selectedPostId: postId,
    });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.selectedPostId !== this.state.selectedPostId) {
      this.fetchComments();
    }
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
        <div className={css.listWrapper}>
          <ul className={css.postList}>
            {this.state.posts !== null &&
              this.state.posts.map(post => {
                return (
                  <li
                    key={post.id}
                    onClick={() => this.onSelectPostID(post.id)}
                    className={css.postItem}
                  >
                    <h2 className={css.itemTitle}>{post.title}</h2>
                    <p className={css.itemBody}>{post.body}</p>
                  </li>
                );
              })}
          </ul>

          <ul className={css.commentsList}>
            <li className={css.commentsListItem}>
              selected post id: {this.state.selectedPostId}
            </li>
            {/* УМОВА ЩОБ КОМЕНТАРІ ХОВАЛИСЬ ПІД ЧАС ЗАВАНТАЖЕННЯ */}
            {!this.state.isLoading &&
              this.state.comments !== null &&
              this.state.comments.map(comment => {
                return (
                  <li key={comment.id} className={css.commentsListItem}>
                    <h2 className={css.commentName}>Name: {comment.name}</h2>
                    <h3 className={css.commentEmail}>
                      <b>Email: </b>
                      {comment.email}
                    </h3>
                    <p className={css.commentBody}>{comment.body}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
