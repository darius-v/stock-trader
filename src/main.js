import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';

// Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';
import { store } from './store/store';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  render: h => h(App),
  store, // this makes store access from child components e.g.
  // this.$store.getters.getFunds
  router,
  http: {
    root: '/',
  },
  created() {
    this.$store.dispatch('load');
  }
})
