import Vue from 'vue';
import Vuex from 'vuex';
import { Mutations } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {
    [Mutations.Input](state, playload) {
      console.log(state, playload);
    }
  },
  actions: {

  }
});