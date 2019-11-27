import React, { Component } from 'react';
import * as api from '../uitls/utils';
import Loader from './Loader';
import ErrHandler from './ErrHandler';

class UserLogin extends Component {
  state = {
    users: [],
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false, err: '' });
    });
  }

  handleClick = event => {
    this.props.signInUser(event.target.name);
  };

  render() {
    const { isLoading, users, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler status={err.status} msg={err.msg} />;
    return (
      <div>
        {users.map(({ username }) => {
          return (
            <button key={username} name={username} onClick={this.handleClick}>
              {username}
            </button>
          );
        })}
        <button name={''} onClick={this.handleClick}>
          sign out
        </button>
      </div>
    );
  }
}

export default UserLogin;
