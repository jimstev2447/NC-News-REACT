import React from 'react';
import img from '../images/bug.png';

const ErrHandler = ({ err: { status, msg } }) => {
  return (
    <main>
      <h3>oops something went wrong ...</h3>
      <img src={img} alt={'error bug'} />
      <p>{status ? status : '404'}</p>
      <p>{msg ? msg : 'path not found'}</p>
    </main>
  );
};

export default ErrHandler;
