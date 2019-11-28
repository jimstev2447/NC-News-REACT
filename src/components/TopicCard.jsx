import React from 'react';
import { Link } from '@reach/router';

const TopicCard = ({ slug, description }) => {
  return (
    <article className="TopicCard">
      <Link className="TopicCardLink" to={`/topics/${slug}`}>
        <h2 className="TopicCarcTitle">{slug}</h2>
      </Link>
      <p>Description: {description}</p>
      <p>
        <b>Add total articles if time</b>
      </p>
    </article>
  );
};

export default TopicCard;
