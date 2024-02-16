import React from 'react';
import { useParams } from 'react-router-dom';

const PostComments = () => {
  const { postId } = useParams();

  return (
    <div>
      <p>PostComments: {postId}</p>
    </div>
  );
};

export default PostComments;
