import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from './utils/axios';
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.use(Antd);
export default new Vue({
  el: '#app',
  store: store,
  router: router,
  render(h) {
    return h(App);
  }
});