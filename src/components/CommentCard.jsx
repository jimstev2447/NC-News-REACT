import React from 'react';

const CommentCard = ({ created_at, author, body, votes }) => {
  return (
    <aside>
      <h4>{author}</h4>
      <p>{created_at}</p>
      <p>{body}</p>
    </aside>
  );
};

export default CommentCard;
