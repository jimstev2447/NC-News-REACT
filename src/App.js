import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Topics from './components/Topics';
import Article from './components/Article';

class App extends Component {
  state = {
    username: undefined
  };

  signInUser = username => {
    this.setState({ username });
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header />
        <Navigator username={username} signInUser={this.signInUser} />
        <Router>
          <Articles path="/" />
          <Topics path="/topics/" />
          <Articles path="/topics/:topic_slug" />
          <Article path="articles/:article_id" username={username} />
        </Router>
      </div>
    );
  }
}

export default App;
