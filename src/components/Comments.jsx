import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../uitls/utils';
import Loader from './Loader';
import ViewToggler from './ViewToggler';
import AddComment from './AddComment';

class Comments extends Component {
  state = {
    comment: [],
    isLoading: true
  };

  componentDidMount() {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }

  handleAddComment = comment => {
    this.setState({ comments: [comment, ...this.state.comments] });
  };

  render() {
    const { isLoading, comments } = this.state;
    const { username, article_id } = this.props;
    if (isLoading) return <Loader />;
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
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </section>
    );
  }
}

export default Comments;
