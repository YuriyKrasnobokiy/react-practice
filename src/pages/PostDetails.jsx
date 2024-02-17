import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from '../pages/PostPage.module.css';
const PostComments = lazy(() => import('pages/PostComments'));

const PostDetails = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
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
      <Link to={backLinkRef.current}>Go back</Link>
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="comments" element={<PostComments />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default PostDetails;
