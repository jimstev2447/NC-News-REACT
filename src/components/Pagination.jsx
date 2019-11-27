import React from 'react';

const Pagination = props => {
  const { total_count } = props;
  return (
    <footer>
      <button>-</button>
      <p>page: UNKNOWN of {Math.ceil(total_count / 10)}</p>
      <button>+</button>
    </footer>
  );
};

export default Pagination;
