import { Loader } from 'components/Loader/Loader';
import React, { Suspense, lazy, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from '../pages/PostPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetails } from '../redux/postDetails/postDetails.reducer';

const PostComments = lazy(() => import('pages/PostComments'));

const PostDetails = () => {
  const { postId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const dispatch = useDispatch();
  const postDetails = useSelector(state => state.magazine.postDetails);
  const isLoading = useSelector(state => state.magazine.isLoading);
  const error = useSelector(state => state.magazine.error);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [postId, dispatch]);

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
