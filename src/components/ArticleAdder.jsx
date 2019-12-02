import React, { Component } from 'react';
import * as api from '../uitls/utils';
import { Redirect, navigate } from '@reach/router';
import UserContext from './UserContext';

class ArticleAdder extends Component {
  static contextType = UserContext;

  state = {
    title: '',
    body: '',
    topicValue: '',
    topicSlugs: [],
    isLoading: true,
    err: '',
    description: '',
    redirect: false,
    article_id: ''
  };

  componentDidMount() {
    api
      .getTopics()
      .then(topics => {
        const topicSlugs = topics.map(topic => topic.slug);
        this.setState({ topicSlugs, isLoading: false, err: '' });
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

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleButton = event => {
    this.setState({ topicValue: event.target.value });
  };

  handleSubmit = event => {
    const { topicValue, topicSlugs, description, title, body } = this.state;
    const isNewTopic = !topicSlugs.includes(topicValue);
    const lowerCaseTopic = topicValue.toLowerCase();
    const username = this.context;
    event.preventDefault();

    if (isNewTopic) {
      api
        .postTopic({ slug: topicValue, description })
        .then(topic => {
          return api.postArticle({
            title,
            body,
            topic: topic.slug,
            author: username
          });
        })
        .then(article => {
          this.setState({ redirect: true, article_id: article.article_id });
        });
    } else {
      return api
        .postArticle({
          title,
          body,
          topic: lowerCaseTopic,
          author: username
        })
        .then(article => {
          navigate(`/articles/${article.article_id}`);
        });
    }
  };
  render() {
    const {
      title,
      body,
      topicSlugs,
      topicValue,
      description,
      redirect,
      article_id
    } = this.state;
    const isNewTopic = topicSlugs.includes(topicValue);
    const username = this.context;
    if (redirect) return <Redirect to={`/articles/${article_id}`} />;

    return !username ? (
      <h2>you must be logged in to post and article</h2>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <h2>Post an Article</h2>
        <label>
          Title
          <input
            onChange={this.handleChange}
            name="title"
            value={title}
            required
            autoComplete="off"
          />
        </label>
        <p>Author: {this.props.username}</p>
        <label>
          Topic
          <input
            name="topicValue"
            onChange={this.handleChange}
            value={topicValue}
            type="text"
            autoComplete="off"
            required
          />
          {topicValue &&
            topicSlugs
              .filter(topic => {
                const includesText = topic
                  .toUpperCase()
                  .includes(topicValue.toUpperCase());
                const isNotTopic = topic !== topicValue;

                return includesText && isNotTopic;
              })
              .map(topic => {
                return (
                  <button key={topic} value={topic} onClick={this.handleButton}>
                    {topic}
                  </button>
                );
              })}
        </label>
        {!isNewTopic && (
          <label>
            Topic Description
            <input
              name="description"
              value={description}
              onChange={this.handleChange}
              type="text"
            ></input>
          </label>
        )}
        <label>
          Content
          <textarea
            onChange={this.handleChange}
            name="body"
            value={body}
            autoComplete="off"
            required
          ></textarea>
        </label>
        <button type="submit">post article</button>
      </form>
    );
  }
}

export default ArticleAdder;
