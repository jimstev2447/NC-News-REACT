import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import SortBar from './SortBar';
import Loader from './Loader';
import * as api from '../uitls/utils';
import Pagination from './Pagination';
import ErrHandler from './ErrHandler';

class Articles extends Component {
  state = { articles: [], isLoading: true, total_count: 0, err: '', page: 1 };

  componentDidMount() {
    this.updateArticles();
  }

  componentDidUpdate(previousProps, previousState) {
    const topicHasChanged = previousProps.topic_slug !== this.props.topic_slug;
    const pageHasChanged = previousState.page !== this.state.page;
    if (topicHasChanged || pageHasChanged) {
      this.updateArticles();
    }
  }

  updateArticles = (
    query = this.props.topic_slug,
    sort_by,
    page = this.state.page
  ) => {
    this.setState({ isLoading: true }, () => {
      api
        .getArticles(query, sort_by, page)
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

  handlePageChange = pageChangeAmt => {
    this.setState(previousState => {
      return { page: previousState.page + pageChangeAmt };
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
        <Pagination
          total_count={this.state.total_count}
          page={this.state.page}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Articles;
