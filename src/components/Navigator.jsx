import React, { useContext } from 'react';
import { Link } from '@reach/router';
import UserContext from './UserContext';

const Navigator = props => {
  console.log(props);
  const username = useContext(UserContext);
  const { signInUser } = props;
  const handleClick = event => {
    signInUser('');
  };

  return (
    <nav>
      <ul>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/topics">
          <button>All Topics</button>
        </Link>
        <Link to="/articles/add-article">
          <button>Add Article</button>
        </Link>
        {!username ? (
          <Link to="/user-login">
            <button>Sign in</button>
          </Link>
        ) : (
          <button onClick={handleClick}>Sign Out</button>
        )}
      </ul>
      <aside className="UserWelcome">
        {username
          ? `Welcome ${username}`
          : 'sign in to post comments/artices test'}
      </aside>
    </nav>
  );
};

export default Navigator;
