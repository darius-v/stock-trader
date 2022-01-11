import Vue from 'vue';
import Vuex from "vuex";
import stocks from "../stocks";

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true, // makes sure state is mutated only through mutations
    state: {
        funds: 0,
        stocks: stocks // amountToBuy property is added to stock by Stocks.vue which is not needed to save but does not hurt.
    },
    mutations: {
        setFunds (state, funds) {
            state.funds = funds
        },
        reduceFunds(state, amount) {
            state.funds -= amount;
        },
        addStockQuantity(state, stockParam) {
            let stockToUpdate = state.stocks.filter(function (stock) {
                return stock.name === stockParam.name;
            })
            stockToUpdate.amount += stockParam.amount;
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

        load ({ commit }) {
            return new Promise((resolve) => {

                Vue.http.get('http://localhost:8000/').then(response => {
                    console.log(response.body);
                    let loadedState = JSON.parse(response.body);
                    commit('setFunds', loadedState.funds );
                    resolve();

                }, () => {
                    console.log('error');
                });

            })
        },
        save () {
            Vue.http.post('http://localhost:8000/save-state', this.state).then(response => {

                console.log(response.body);

            }, () => {
                console.log('error');
            });
        }
    }
});
