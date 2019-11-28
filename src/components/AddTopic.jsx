import React, { Component } from 'react';

class AddTopic extends Component {
  render() {
    return (
      <article>
        <h3>Add Topic</h3>
        <label>
          topic:
          <input></input>
        </label>
        <p>Description</p>
        <input></input>
        <button>Add Topic</button>
      </article>
    );
  }
}

export default AddTopic;
