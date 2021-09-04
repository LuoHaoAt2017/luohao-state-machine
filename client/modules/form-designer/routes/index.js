import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});