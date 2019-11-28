import TopicCard from './TopicCard';
import React, { Component } from 'react';
import * as api from '../uitls/utils';
import Loader from './Loader';
import ErrHandler from './ErrHandler';

class Topics extends Component {
  state = { topics: [], isLoading: true, err: '' };

  componentDidMount() {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false, err: '' });
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
    const { isLoading, topics, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrHandler status={err.status} msg={err.msg} />;
    return (
      <>
        <main className="TopicsPage">
          <h2>Topics</h2>
          {topics.map(topic => {
            return <TopicCard key={topic.slug} {...topic} />;
          })}
        </main>
      </>
    );
  }
}

export default Topics;
