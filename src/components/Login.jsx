import React from 'react';
import UserLogin from './UserLogin';

const Login = props => {
  return (
    <main>
      <h2>login</h2>
      <UserLogin
        signInUser={props.signInUser}
        username={props.username}
      ></UserLogin>
      <p>add user</p>
    </main>
  );
};

export default Login;
