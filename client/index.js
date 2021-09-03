import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routes';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'xe-utils';
import VXETable from 'vxe-table';
import { throttle } from 'lodash';
import 'vxe-table/lib/style.css';
import openFormDetail from 'form-detail/config';
Vue.prototype.$bus = new Vue();
Vue.use(Antd);
Vue.use(VXETable);

window.openFormDetail = throttle(openFormDetail, 200);

const app = new Vue({
  el: '#app',
  store: store,
  router: router,
  render(h) {
    return h(App);
  }
});

export default app;