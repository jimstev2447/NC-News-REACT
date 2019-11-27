import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';
import ErrHandler from './components/ErrHandler';

class App extends Component {
  state = {
    username: ''
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
          <SingleArticle path="articles/:article_id" username={username} />
          <ErrHandler default />
        </Router>
      </div>
    );
  }
}

export default App;
