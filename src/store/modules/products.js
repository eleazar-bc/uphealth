import {firestoreDb} from '../../utils/db';

const state = {
    medicines: [
        // {id, name, createdAt, brand, dosage, type, stock, price}
    ]
};

const getters = {
    getAllMedicines: () => {
        return state.medicines;
    }
};

const actions = {
    setMedicines: ({commit}, payload = 'createdAt') => {
        firestoreDb.getDocuments('products', payload).then(documents => {
            commit('SET_MEDICINES', documents);
        });

        firestoreDb.retrieveCombinedTransactions().then(documents => {
            commit('INCREMENT_SALES_QUANTITY', documents);
        });
    },

    addItem: ({commit}, newItem) => {
        const document = firestoreDb.addDocument('products', newItem);
        commit('ADD_ITEM', document);
    },

    updateItem: ({commit}, item) => {
        firestoreDb.updateDocument('products', item);
        commit('UPDATE_ITEM', item);
    },
    deleteItem: ({commit}, id) => {
        const deleteFrom = ['products', 'transactions'];
        firestoreDb.deleteRecords(deleteFrom, id);
        commit('DELETE_ITEM', id);
    },
    
    checkout: ({commit}, cart) => {
        cart.forEach(item => {
            firestoreDb.decrementQuantity('products', item);
            commit('DECREMENT_INVENTORY', item);
        });
    },

    updateSales: ({commit}, cart) => {
        firestoreDb.addTransaction(cart);
        commit('INCREMENT_SALES_QUANTITY', cart);
    }
};

const mutations = {
    SET_MEDICINES: (state, medicines) => state.medicines = medicines,
    ADD_ITEM: (state, newItem) => state.medicines.unshift(newItem),
    UPDATE_ITEM: (state, item) => {
        const index = state.medicines.findIndex(med => med.id == item.id);
        state.medicines[index] = {...item};
    },
    DELETE_ITEM:  (state, id) => state.medicines = state.medicines.filter(item => item.id != id),
    DECREMENT_INVENTORY: (state, item) => {
        const stateItem = state.medicines.find(medicine => medicine.id === item.id);
        stateItem.stock = stateItem.stock - item.quantity;
    },
    INCREMENT_SALES_QUANTITY: (state, items) => {
        items.forEach(item => {
            const stateItem = state.medicines.find(med => med.id == item.id);
            if(stateItem.quantity){
                stateItem.quantity = stateItem.quantity + item.quantity;
            } else {
                stateItem.quantity = item.quantity;
            }
        });
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}