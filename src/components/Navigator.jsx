import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../uitls/utils';
import Loader from './Loader';
import TopicButton from './TopicButton';
import UserLogin from './UserLogin';
import ViewToggler from './ViewToggler';
import ErrHandler from './ErrHandler';

class Navigator extends Component {
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
        <ViewToggler buttonName="sign in as ...">
          <UserLogin signInUser={this.props.signInUser} />
        </ViewToggler>
        <aside>
          user: {this.props.username ? this.props.username : 'please sign in'}
        </aside>
      </nav>
    );
  }
}

export default Navigator;
