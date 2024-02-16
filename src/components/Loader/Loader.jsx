import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from '../../pages/PostPage.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height="48"
        width="48"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
