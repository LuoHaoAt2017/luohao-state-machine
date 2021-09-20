import Vue from 'vue';
import Vuex from 'vuex';
import FormDetail from '@/models/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    namespaced: true,
    form: {
      modules: {
        namespaced: true,
        ViewModel: FormDetail
      }
    }
  }
});

export default store;