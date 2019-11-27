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
    const { username, article_id } = this.props;
    event.preventDefault();
    api
      .postComment(article_id, { username, body })
      .then(comment => {
        this.props.handleAddComment(comment);
        this.setState({ comment: '' });
      })
      .catch(err => {
        this.props.handleAddComment({
          username,
          article_id,
          body: 'unable to process comment at this time'
        });
      });
  };

  render() {
    return (
      <form className="AddComment" onSubmit={this.handleSubmit}>
        <h4>Add your comment below</h4>

        {!this.props.username && (
          <p>{'you must be logged in to submit a comment'}</p>
        )}

        <textarea
          onChange={this.handleChange}
          value={this.state.comment}
          type="textarea"
          required
        ></textarea>
        {this.props.username && (
          <button className="SubmitButton">Submit</button>
        )}
      </form>
    );
  }
}

export default AddComment;
