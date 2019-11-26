import React from 'react';
import Voter from './Voter';

const CommentCard = ({ created_at, author, body, votes, comment_id }) => {
  return (
    <aside>
      <h4>{author}</h4>
      <p>{created_at}</p>
      <p>{body}</p>
      <Voter votes={votes} id={comment_id} type="comments" />
    </aside>
  );
};

export default CommentCard;
