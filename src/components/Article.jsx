import React, { Component } from 'react';
import * as api from './utils';
import CommentCard from './CommentCard';
import Loader from './Loader';
import ViewToggler from './ViewToggler';
import Voter from './Voter';
import { Link } from '@reach/router';

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    Promise.all([
      api.getSingleArticle(article_id),
      api.getComments(article_id)
    ]).then(([article, comments]) => {
      this.setState({ article, comments, isLoading: false });
    });
  }

  // componentDidUpdate(previousProps) {
  //   const { article_id } = this.props;

  //   api.getComments(article_id).then(comments => {
  //     this.setState({ comments });
  //   });
  // }

  //

  render() {
    const {
      article: { title, author, body, comment_count, votes, article_id },
      comments,
      isLoading
    } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <main>
        <article>
          <Voter votes={votes} type="articles" id={article_id} />
          <h3>{title}</h3>
          <p>Author: {author}</p>
          <p>{body}</p>
          <p>comment count: {comment_count}</p>
        </article>

        <ViewToggler>
          {comments.map(comment => (
            <CommentCard key={comment.comment_id} {...comment}></CommentCard>
          ))}
        </ViewToggler>
        <Link to="/">
          <button>Home</button>
        </Link>
      </main>
    );
  }
}

export default Article;
