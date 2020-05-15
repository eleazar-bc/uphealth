import {firestoreDb} from '../../utils/db';

const state = {
    sales: []
}

const getters = {
    getAllSales: () => state.sales
};

const actions = {
    setSales: ({commit}, allMedicines) => {
        console.log('---------- for some reason, i need this console log ----------');
        commit('SET_SALES', allMedicines);        
        firestoreDb.retrieveCombinedTransactions().then(documents => {      
            commit('INCREMENT_SALES_QUANTITY', documents);
        });
    },

    updateSales: ({commit}, cart) => {
        firestoreDb.addTransaction(cart);
        commit('INCREMENT_SALES_QUANTITY', cart);
    },

    deleteTransaction: ({commit}, id) => {
        firestoreDb.deleteRecords('transactions', id);
        commit('DELETE_ITEM', id);
    },
};

const mutations = {
    SET_SALES: (state, sales) => state.sales = sales,
    INCREMENT_SALES_QUANTITY: (state, items) => {
        items.forEach(item => {
            const stateItem = state.sales.find(med => med.id == item.id);
            if(stateItem.quantity){
                stateItem.quantity = stateItem.quantity + item.quantity;
            } else {
                stateItem.quantity = item.quantity;
            }
        });
    },
    DELETE_ITEM:  (state, id) => state.sales = state.sales.filter(item => item.id != id)
};

export default {
    state,
    getters,
    actions,
    mutations
}