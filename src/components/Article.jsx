import React, { Component } from 'react';
import * as api from '../uitls/utils';
import Loader from './Loader';
import ViewToggler from './ViewToggler';
import Voter from './Voter';
import Comments from './Comments';
import ErrHandler from './ErrHandler';

class Article extends Component {
  state = {
    article: {},
    err: {},
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
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
  }

  render() {
    const {
      article: { title, author, body, comment_count, votes, article_id },
      isLoading,
      err
    } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrHandler status={err.status} msg={err.msg} />;
    return (
      <main>
        <article>
          <Voter votes={votes} type="articles" id={article_id} />
          <h3>{title}</h3>
          <p>Author: {author}</p>
          <p>{body}</p>
          <p>comment count: {comment_count}</p>
        </article>

        <ViewToggler buttonName="Show Comments">
          <Comments
            article_id={this.props.article_id}
            username={this.props.username}
          />
        </ViewToggler>
      </main>
    );
  }
}

export default Article;
