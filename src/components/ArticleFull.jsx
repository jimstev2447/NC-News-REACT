import React from 'react';

const ArticleFull = ({ title, comment_count, body, author }) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>{body}</p>
      <p>comment count: {comment_count}</p>
    </article>
  );
};

export default ArticleFull;
