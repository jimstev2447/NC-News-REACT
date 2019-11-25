import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import SortBar from './SortBar';
import Loader from './Loader';
import * as api from './utils';

class Articles extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  componentDidUpdate(previousProps) {
    if (previousProps.topic_slug !== this.props.topic_slug) {
      api.getArticles(this.props.topic_slug).then(articles => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <main>
        <SortBar />
        <h2>All Articles</h2>
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
        </ul>
      </main>
    );
  }
}

export default Articles;
