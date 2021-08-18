import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';
import Mock from '../mocks';
import Antd from 'ant-design-vue';
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.use(Mock);
Vue.use(Antd);
export default new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
