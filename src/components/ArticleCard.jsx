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
    <article className="ArticleCard">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <Voter votes={votes} type="articles" id={article_id} />
      <div className="ArticleInfo">
        <p>By: {author}</p>
        <p>Created at: {created_at}</p>
        <p>Comments: {comment_count}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
