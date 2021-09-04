import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8088/',
  timeout: 1000,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // }
});

instance.interceptors.request.use(function(request) {
  return request;
}, function(error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;