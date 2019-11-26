import React from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

const ArticleCard = ({
  title,
  created_at,
  author,
  comment_count,
  article_id,
  votes
}) => {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Created at: {created_at}</p>
      <p>Author: {author}</p>
      <p>Comments: {comment_count}</p>
      <Voter votes={votes} type="articles" id={article_id} />
    </article>
  );
};

export default ArticleCard;
