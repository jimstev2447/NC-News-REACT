import TopicCard from './TopicCard';
import React, { Component } from 'react';
import * as api from './utils';
import Loader from './Loader';

class Topics extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { isLoading, topics } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <main>
        <h2>All topics</h2>
        {topics.map(topic => {
          return <TopicCard key={topic.slug} {...topic} />;
        })}
      </main>
    );
  }
}

export default Topics;
