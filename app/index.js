import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.prototype.$bus = new Vue();
Vue.use(Antd);

const app = new Vue({
  el: '#app',
  store: store,
  router: router,
  render(h) {
    return h(App);
  }
});

export default app;