import React, { Component } from 'react';
import * as api from '../uitls/utils';
import Loader from './Loader';

class UserLogin extends Component {
  state = {
    users: [],
    isLoading: true
  };

  componentDidMount() {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  }

  handleClick = event => {
    this.props.signInUser(event.target.name);
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        {this.state.users.map(({ username }) => {
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
