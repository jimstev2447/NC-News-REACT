import React, { Component } from 'react';
import * as api from '../uitls/utils';
import Loader from './Loader';
import ViewToggler from './ViewToggler';
import Voter from './Voter';
import Comments from './Comments';
import AddComment from './AddComment';

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const {
      article: { title, author, body, comment_count, votes, article_id },
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

        <ViewToggler buttonName="Show Comments">
          <Comments article_id={this.props.article_id} />
        </ViewToggler>
        <ViewToggler buttonName="Add Comment">
          <AddComment username={this.props.username} />
        </ViewToggler>
      </main>
    );
  }
}

export default Article;
