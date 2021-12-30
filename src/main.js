import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // makes sure state is mutated only through mutations
  state: {
    funds: 0
  },
  mutations: {
    setFunds (state, funds) {
      state.funds = funds
    }
  },
  getters: {
    getFunds: state => {
      return state.funds;
    }
  }
});

store.commit('setFunds', 9999);
console.log(store.getters.getFunds);


new Vue({
  el: '#app',
  render: h => h(App),
  store // this makes store access from child components e.g.
  // this.$store.getters.getFunds
})
