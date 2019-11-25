const axios = require('axios');

const baseUrl = 'https://nc-news-project-backend-js.herokuapp.com';

exports.getArticles = topic => {
  return axios
    .get(`${baseUrl}/api/articles`, { params: { topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

exports.getTopics = () => {
  return axios.get(`${baseUrl}/api/topics`).then(({ data }) => {
    return data.topics;
  });
};

exports.getSingleArticle = article_id => {
  return axios
    .get(`${baseUrl}/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

exports.getComments = article_id => {
  return axios
    .get(`${baseUrl}/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};
