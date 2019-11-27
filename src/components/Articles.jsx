import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import SortBar from './SortBar';
import Loader from './Loader';
import * as api from '../uitls/utils';
import Pagination from './Pagination';
import ErrHandler from './ErrHandler';

class Articles extends Component {
  state = { articles: [], isLoading: true, total_count: '', err: '' };

  componentDidMount() {
    this.updateArticles();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.topic_slug !== this.props.topic_slug) {
      this.updateArticles();
    }
  }

  updateArticles = (query = this.props.topic_slug, sort_by) => {
    this.setState({ isLoading: true }, () => {
      api
        .getArticles(query, sort_by)
        .then(({ articles, total_count }) => {
          this.setState(
            { articles, isLoading: false, total_count, err: '' },
            () => {}
          );
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

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler status={err.status} msg={err.msg} />;
    return (
      <div className="ArticlesView">
        <SortBar
          updateArticles={this.updateArticles}
          topic={this.props.topic_slug}
          order={this.props.order}
        />
        <main>
          <ul>
            {articles.map(article => {
              return <ArticleCard key={article.article_id} {...article} />;
            })}
          </ul>
        </main>
        <Pagination total_count={this.state.total_count} />
      </div>
    );
  }
}

export default Articles;
