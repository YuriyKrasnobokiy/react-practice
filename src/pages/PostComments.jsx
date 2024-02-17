import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../pages/PostPage.module.css';
import { Loader } from 'components/Loader/Loader';

const PostComments = () => {
  const { postId } = useParams();
  const [postComments, setPostComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostComments = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        setPostComments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostComments();
  }, [postId]);

  return (
    <>
      <h1>Post {postId} Comments</h1>
      {error !== null && <p className={css.errorMessage}>{error}</p>}
      {isLoading && <Loader />}
      {postComments !== null && (
        <div>
          <ul className={css.commentsList}>
            {postComments.map(comment => {
              return (
                <li className={css.commentsListItem} key={comment.id}>
                  <p className={css.commentName}>
                    <b>User</b>: {comment.name}
                  </p>
                  <p className={css.commentEmail}>
                    <b>Email</b>: {comment.email}
                  </p>
                  <p className={css.commentBody}>
                    <b>Comment</b>: {comment.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default PostComments;
