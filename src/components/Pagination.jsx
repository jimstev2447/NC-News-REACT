import React from 'react';

const Pagination = props => {
  const { total_count } = props;
  return (
    <div>
      <button>-</button>
      <p>current page: UNKNOWN</p>
      <p>total pages: {Math.ceil(total_count / 10)}</p>
      <button>+</button>
    </div>
  );
};

export default Pagination;
