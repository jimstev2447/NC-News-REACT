import React from 'react';

const Pagination = props => {
  const { total_count, handlePageChange, page } = props;
  const maxPage = Math.ceil(total_count / 10);

  const handleClick = event => {
    const value = event.target.value;
    handlePageChange(+value);
  };

  return (
    <footer>
      <button value="-1" onClick={handleClick} disabled={page === 1}>
        -
      </button>
      <p>
        Page: {page} of {maxPage}
      </p>
      <button value="1" onClick={handleClick} disabled={page === maxPage}>
        +
      </button>
    </footer>
  );
};

export default Pagination;
