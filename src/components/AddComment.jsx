import React, { Component } from 'react';

class AddComment extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    const comment = event.target.value;
    this.setState({ comment });
  };

  render() {
    return (
      <form>
        <h4>Comment</h4>
        <h5>username: {this.props.username}</h5>
        <input onChange={this.handleChange} value={this.state.comment}></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddComment;
