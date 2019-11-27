import React from 'react';
import img from '../images/bug.png';

const ErrHandler = err => {
  console.log(err);
  return (
    <main>
      <h3>oops something went wrong ...</h3>
      <img src={img} alt={'error bug'} />
      <p>{err.status ? err.status : '404'}</p>
      <p>{err.msg ? err.msg : 'path not found'}</p>
    </main>
  );
};

export default ErrHandler;