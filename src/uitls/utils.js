const axios = require('axios');

const baseUrl = 'https://nc-news-project-backend-js.herokuapp.com';

exports.getArticles = (topic, sort_by, page) => {
  return axios
    .get(`${baseUrl}/api/articles`, { params: { topic, sort_by, p: page } })
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

exports.patchVotes = (id, type, inc_votes) => {
  return axios.patch(`${baseUrl}/api/${type}/${id}`, { inc_votes });
};

exports.getUsers = () => {
  return axios.get(`${baseUrl}/api/users/`).then(({ data }) => {
    return data.users;
  });
};

exports.postComment = (article_id, comment) => {
  return axios
    .post(`${baseUrl}/api/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

exports.deleteComment = comment_id => {
  return axios.delete(`${baseUrl}/api/comments/${comment_id}`);
};

exports.postTopic = topic => {
  return axios.post(`${baseUrl}/api/topics`, topic).then(({ data }) => {
    return data.topic;
  });
};

exports.postArticle = ({ title, body, author, topic }) => {
  return axios
    .post(`${baseUrl}/api/articles`, { title, author, topic, body })
    .then(({ data }) => {
      return data.article;
    });
};
