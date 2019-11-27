import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../uitls/utils';
import Loader from './Loader';
import ViewToggler from './ViewToggler';
import AddComment from './AddComment';
import ErrHandler from './ErrHandler';

class Comments extends Component {
  state = {
    comment: [],
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    this.setState({ isLoading: true }, () => {
      api
        .getComments(this.props.article_id)
        .then(comments => {
          this.setState({ comments, isLoading: false, err: '' });
        })
        .catch(
          ({
            response: {
              status,
              data: { msg }
            }
          }) => {
            this.setState({ err: { msg, status }, isLoading: false });
          }
        );
    });
  };

  handleAddComment = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  render() {
    const { isLoading, comments, err } = this.state;
    const { username, article_id } = this.props;

    if (isLoading) return <Loader />;
    if (err) return <ErrHandler status={err.status} msg={err.msg} />;
    return (
      <section>
        <ViewToggler buttonName="Add Comment">
          <AddComment
            username={username}
            handleAddComment={this.handleAddComment}
            article_id={article_id}
          />
        </ViewToggler>
        {comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              {...comment}
              username={username}
              fetchComments={this.fetchComments}
            />
          );
        })}
      </section>
    );
  }
}

export default Comments;
