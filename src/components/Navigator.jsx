import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../uitls/utils';
import Loader from './Loader';
import TopicButton from './TopicButton';

class Navigator extends Component {
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
      <nav>
        nav bar
        <ul>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/topics">
            <button>Topics</button>
          </Link>
          {topics.map(topic => {
            return <TopicButton key={topic.slug} topicName={topic.slug} />;
          })}
        </ul>
      </nav>
    );
  }
}

export default Navigator;
