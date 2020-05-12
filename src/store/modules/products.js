import firebase from 'firebase/app';
import {db} from '../../utils/db';
import {firestoreIdGenerator} from '../../utils/firestoreIdGenerator';

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
        db.collection('products').orderBy(payload)
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            });
            commit('SET_MEDICINES', documents)
        })
    },

    addItem: ({commit}, newItem) => {
        const id = firestoreIdGenerator();
        newItem.createdAt = new Date();
        db.collection('products').doc(id).set(newItem);
        newItem.id = id;
        commit('ADD_ITEM', newItem);
    },

    updateItem: ({commit}, item) => {
        db.collection('products').doc(item.id).set(item);
        commit('UPDATE_ITEM', item);
    },
    deleteItem: ({commit}, id) => {
        db.collection('products').doc(id).delete();
        commit('DELETE_ITEM', id);
    },
    
    checkout: ({commit}, cart) => {
        cart.forEach(item => {
            db.collection('products').doc(item.id).update({
                stock: firebase.firestore.FieldValue.increment(parseInt(-item.quantity))
            });
            commit('DECREMENT_INVENTORY', item);
        });
    }
};

const mutations = {
    SET_MEDICINES: (state, medicines) => state.medicines = medicines,
    ADD_ITEM: (state, newItem) => state.medicines.unshift(newItem),
    UPDATE_ITEM: (state, item) => {
        const index = state.medicines.indexOf(item);
        state.medicines.splice(index, 1, {...item});
    },
    DELETE_ITEM:  (state, id) => state.medicines = state.medicines.filter(item => item.id != id),
    DECREMENT_INVENTORY: (state, item) => {
        const stateItem = state.medicines.find(medicine => medicine.id === item.id);
        stateItem.stock = stateItem.stock - item.quantity;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}