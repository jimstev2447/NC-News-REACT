import React, { Component } from 'react';
import * as api from '../uitls/utils';

class AddTopic extends Component {
  state = {
    description: '',
    slug: ''
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { slug, description } = this.state;
    event.preventDefault();
    api.postTopic({ slug, description });
  };

  render() {
    const { description, slug } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Topic</h3>
          <label htmlFor="topic">
            topic:
            <input
              value={slug}
              name="slug"
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <label htmlFor="topic_description">
            Description:
            <textarea
              required
              value={description}
              name="description"
              onChange={this.handleChange}
            ></textarea>
          </label>
          <button>Add Topic</button>
        </form>
      </section>
    );
  }
}

export default AddTopic;
