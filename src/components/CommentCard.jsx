import React from 'react';
import Voter from './Voter';
import * as api from '../uitls/utils';

const CommentCard = ({
  created_at,
  author,
  body,
  votes,
  comment_id,
  username,
  fetchComments
}) => {
  const handleClick = event => {
    api.deleteComment(comment_id).then(() => {
      fetchComments();
    });
  };
  return (
    <aside>
      <h4>{author}</h4>
      <p>{created_at}</p>
      <p>{body}</p>
      <Voter votes={votes} id={comment_id} type="comments" />
      {author === username && (
        <button onClick={handleClick}>delete comment</button>
      )}
    </aside>
  );
};

export default CommentCard;
