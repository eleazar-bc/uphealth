import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';
import filter from './modules/filter';
import transactions from './modules/transactions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        products,
        cart,
        filter,
        transactions
    }
});
