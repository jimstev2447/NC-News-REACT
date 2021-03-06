import React from 'react';

const SortBar = props => {
  const { topic, updateArticles } = props;

  const handleClick = event => {
    const value = event.target.value;
    updateArticles(topic, value);
  };
  return (
    <div className="SortBar">
      <h5>Sort by:</h5>
      <button onClick={handleClick} value="created_at">
        Created at
      </button>
      <button onClick={handleClick} value="votes">
        Votes
      </button>
      <button onClick={handleClick} value="comment_count">
        Comment Count
      </button>
    </div>
  );
};

export default SortBar;
