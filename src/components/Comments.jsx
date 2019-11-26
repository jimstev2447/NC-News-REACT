import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../uitls/utils';
import Loader from './Loader';

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
  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <Loader />;
    return (
      <section>
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </section>
    );
  }
}

export default Comments;
