import React from 'react';
import { Link } from '@reach/router';

const TopicButton = ({ topicName }) => {
  return (
    <Link to={`/topics/${topicName}`}>
      <button>{topicName}</button>
    </Link>
  );
};

export default TopicButton;
