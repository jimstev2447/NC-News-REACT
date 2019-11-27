import React, { Component } from 'react';
import * as api from '../uitls/utils';

class AddComment extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    const comment = event.target.value;
    this.setState({ comment });
  };

  handleSubmit = event => {
    const body = this.state.comment;
    const username = this.props;
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Comment</h4>
        <h5>
          username:
          {this.props.username
            ? this.props.username
            : 'you must be logged in to submit a comment'}
        </h5>
        <input
          onChange={this.handleChange}
          value={this.state.comment}
          type="text"
          required
        ></input>
        {this.props.username && <button>Submit</button>}
      </form>
    );
  }
}

export default AddComment;
