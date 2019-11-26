import React, { Component } from 'react';
import * as api from '../uitls/utils';

class Voter extends Component {
  state = {
    votes: 0,
    path: ''
  };

  componentDidMount() {}

  handleVote = ({ target: { name } }) => {
    const { votes } = this.state;
    const { id, type } = this.props;
    const vote_inc = +name;
    api.patchVotes(id, type, vote_inc);
    this.setState({ votes: votes + vote_inc });
  };

  render() {
    const { votes } = this.state;
    return (
      <div>
        <h6>Votes</h6>
        <button name="1" onClick={this.handleVote} disabled={votes > 0}>
          +
        </button>
        <p>{this.props.votes + votes}</p>
        <button name="-1" onClick={this.handleVote} disabled={votes < 0}>
          -
        </button>
      </div>
    );
  }
}

export default Voter;
