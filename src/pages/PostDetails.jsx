import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import css from '../pages/PostPage.module.css';
import PostComments from './PostComments';

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPostDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <>
      <h1>Post Details</h1>
      {error !== null && <p className={css.errorMessage}>{error}</p>}
      {isLoading && <Loader />}
      {postDetails !== null && (
        <div>
          <h2 className={css.postDetailsTitle}>{postDetails.title}</h2>
          <h3 className={css.postDetailsTitle}>PostId: {postDetails.id}</h3>
          <code className={css.postDetailsBody}>{postDetails.body}</code>
        </div>
      )}
      <div>
        <NavLink className="header-link" to="comments">
          Comments
        </NavLink>
      </div>
      <Routes>
        <Route path="comments" element={<PostComments />} />
      </Routes>
    </>
  );
};

export default PostDetails;
