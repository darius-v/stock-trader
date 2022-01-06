import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
    },

    /**
     * Actions are similar to mutations, the differences being that:

     Instead of mutating the state, actions commit mutations.
     Actions can contain arbitrary asynchronous operations.
     */
    actions: {
        save (context) {
            // todo - save state - call on menu click
            // context.commit('increment')
            console.log('save in store');


            console .log(this.state);
            Vue.http.post('http://localhost:8000/save-state', this.state).then(response => {

                console.log(response.body);

            }, () => {
                console.log('error');
            });
        }
    }
});
