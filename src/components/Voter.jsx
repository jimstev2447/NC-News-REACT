import React, { Component } from 'react';
import * as api from './utils';

class Voter extends Component {
  state = {
    votes: 0,
    path: '',
    hasVoted: false
  };

  componentDidMount() {
    this.setState({
      votes: this.props.votes,
      path: `/api/${this.props.type}/${this.props.id}`
    });
  }

  handleVote = ({ target: { name } }) => {
    const { path, votes } = this.state;
    const vote_inc = name === 'upVote' ? 1 : -1;
    api.patchVotes(path, vote_inc);
    this.setState({ hasVoted: true, votes: votes + vote_inc });
  };

  render() {
    const { votes, hasVoted } = this.state;
    return hasVoted ? (
      <p>{votes}</p>
    ) : (
      <div>
        <button name="upVote" onClick={this.handleVote}>
          upVote
        </button>
        <p>{votes}</p>
        <button name="downVote" onClick={this.handleVote}>
          downVote
        </button>
      </div>
    );
  }
}

export default Voter;
