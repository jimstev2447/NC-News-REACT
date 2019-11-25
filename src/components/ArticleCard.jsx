import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({
  title,
  created_at,
  author,
  comment_count,
  article_id
}) => {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Created at: {created_at}</p>
      <p>Author: {author}</p>
      <p>Comments: {comment_count}</p>
    </article>
  );
};

export default ArticleCard;
