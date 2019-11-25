import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Topics from './components/Topics';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Router>
        <Articles path="/" />
        <Topics path="/topics/" />
        <Articles path="/topics/:topic_slug" />
        <Article path="articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
