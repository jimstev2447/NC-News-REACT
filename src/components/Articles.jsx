import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import SortBar from './SortBar';
import Loader from './Loader';
import * as api from '../uitls/utils';
import Pagination from './Pagination';

class Articles extends Component {
  state = { articles: [], isLoading: true, total_count: '' };

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
      console.log(this.state);
      api.getArticles(query, sort_by).then(({ articles, total_count }) => {
        this.setState({ articles, isLoading: false, total_count }, () => {
          console.log(this.state);
        });
      });
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <div>
        <SortBar
          updateArticles={this.updateArticles}
          topic={this.props.topic_slug}
        />
        <main>
          <h2>Articles</h2>
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
