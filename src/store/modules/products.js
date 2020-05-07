import firebase from 'firebase/app';
import {db} from '../../db';
import {firestoreIdGenerator} from '../../utils/firestoreIdGenerator';
// import medicines from '../../api/medicines';

const state = {
    medicines: []
};

const getters = {};

const actions = {
    getAllMedicines: ({commit}) => {
    //     medicines.getAllMedicines((medicines) => commit('setMedicines', medicines));

        db.collection('products').orderBy('createdAt')
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => {
                const result = doc.data()
                result.id = doc.id
                return result
            });
            commit('setMedicines', documents)
        })
    },

    addItem: ({commit}, newItem) => {
        const id = firestoreIdGenerator();
        newItem.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        db.collection('products').doc(id).set(newItem);
        newItem.id = id;
        commit('addItem', newItem);
    },
    updateItem: ({commit}, item) => {
        db.collection('products').doc(item.id).set(item);
        commit('updateItem', item);
    },
    deleteItem: ({commit}, id) => {
        db.collection('products').doc(id).delete();
        commit('deleteItem', id);
    },
    checkout: ({commit}, cart) => {
        // const id = firestoreIdGenerator();
        // let transaction = {};
        // transaction.date = firebase.firestore.FieldValue.serverTimestamp();
        // transaction.items = cart;
        // db.collection('transactions').doc(id).set(transaction);
        cart.forEach(item => {
            commit('decrementInventory', item);
        });
    }
};

const mutations = {
    setMedicines: (state, medicines) => state.medicines = medicines,
    addItem: (state, newItem) => state.medicines.unshift(newItem),
    updateItem: (state, item) => {
        const index = state.medicines.indexOf(item);
        state.medicines.splice(index, 1, {...item});
    },
    deleteItem:  (state, id) => state.medicines = state.medicines.filter(item => item.id != id),
    decrementInventory: (state, item) => {
        const stateItem = state.medicines.find(medicine => medicine.id === item.id);
        stateItem.stock = stateItem.stock - item.quantity;
        // stateItem.sold = item.quantity;
        db.collection('products').doc(stateItem.id).set(stateItem);
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}