import axios from 'axios';

const baseUrl = 'http://localhost:8080/#/';

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000
});

service.interceptors.response.use(function (response) {
  if (response.data != null) {
    return response;
  } else {
    this.$Message.error({
      content: '没有数据返回！',
      duration: 3,
      closable: true
    });
    return Promise.reject(new Error('error'));
  }
}, function (error) {
  console.debug('requets error : %o' + error);
  this.$Message.error({
    content: error.message,
    duration: 3,
    closable: true
  });
  return Promise.reject(new Error('error'));
});

export default service;
