const axios = require('axios');

const baseUrl = 'https://nc-news-project-backend-js.herokuapp.com';

exports.getArticles = (topic, sort_by) => {
  return axios
    .get(`${baseUrl}/api/articles`, { params: { topic, sort_by } })
    .then(({ data }) => {
      return data;
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

exports.patchVotes = (path, inc_votes) => {
  console.log(`${baseUrl}${path}`);
  return axios.patch(`${baseUrl}${path}`, { inc_votes }).then(data => {
    console.log(data);
  });
};
