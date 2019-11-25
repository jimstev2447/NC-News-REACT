import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Articles from './components/Articles';
import { Router } from '@reach/router';
import Topics from './components/Topics';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Router>
        <Articles path="/" />
        <Topics path="/topics" />
      </Router>
    </div>
  );
}

export default App;
