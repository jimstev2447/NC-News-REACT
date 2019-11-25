import React, { Component } from 'react';
import * as api from './utils';
import CommentCard from './CommentCard';
import ArticleFull from './ArticleFull';
import Loader from './Loader';
import ViewToggler from './ViewToggler';

class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    viewComments: false
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

  handleClick = event => {
    this.setState({ viewComments: !this.state.viewComments });
  };

  render() {
    const { article, comments, isLoading, viewComments } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <main>
        <ArticleFull {...article} />
        <button onClick={this.handleClick}>view comments</button>
        <ViewToggler value={viewComments}>
          {comments.map(comment => {
            return (
              <CommentCard key={comment.comment_id} {...comment}></CommentCard>
            );
          })}
        </ViewToggler>
      </main>
    );
  }
}

export default Article;
