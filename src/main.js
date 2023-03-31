import Vue from 'vue'
import App from './App.vue'

import store from "./store"
// import Vuex from "vuex"

// Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  // el: ""
  render: h => h(App),
  store
  /* store: new Vuex.Store({
    actions: {
      increment(context, v) {
        context.commit("increment", v);
      },
      decrement(context, v) {
        context.commit("decrement", v);
      },
      incrementOdd(context, v) {
        if(context.state.sum % 2) {
          context.commit("incrementOdd", v);
        }
      },
      incrementWait(context, v) {
        setTimeout(() => {
          context.commit("incrementWait", v);
        }, 500);
      }
    },
    mutations: {
      increment(state, v) {
        state.sum += v;
      },
      decrement(state, v) {
        state.sum -= v;
      },
      incrementOdd(state, v) {
        state.sum += v;
      },
      incrementWait(state, v) {
        state.sum += v;
      }
    },
    state: {
      sum: 0
    }
  }) */
}).$mount('#app')

