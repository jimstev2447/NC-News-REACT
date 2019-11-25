import React from 'react';
import { Link } from '@reach/router';

const Navigator = () => {
  return (
    <nav>
      nav bar
      <ul>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigator;
