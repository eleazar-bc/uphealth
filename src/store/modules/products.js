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
        });

        db.collection('transactions')
        .get()
        .then(querySnapshot => {
            const document = querySnapshot.docs.map(doc => doc.data().sales);

            if(document.length > 0) {               
                const combined = combineQuantity(document);
                commit('INCREMENT_SALES_QUANTITY', combined);
            }
        });
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
        db.collection('transactions').doc(id).delete();
        commit('DELETE_ITEM', id);
    },
    
    checkout: ({commit}, cart) => {
        cart.forEach(item => {
            db.collection('products').doc(item.id).update({
                stock: firebase.firestore.FieldValue.increment(parseInt(-item.quantity))
            });
            commit('DECREMENT_INVENTORY', item);
        });
    },

    updateSales: ({commit}, cart) => {
        cart.forEach(item => {
            const {id, name, price, quantity} = item;
            const createdAt = new Date();
            const itemRef = db.collection('transactions').doc(item.id);
            db.runTransaction(transaction => {
                return transaction.get(itemRef).then(doc => {
                    if (!doc.data()) {
                        transaction.set(itemRef, {
                            sales: [{id, name, createdAt, price, quantity}]
                        });
                    } else {
                        const itemSales = doc.data().sales;
                        itemSales.push({id, name, createdAt, price, quantity});
                        transaction.update(itemRef, { sales: itemSales });
                    }
                });
            })
        });

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

function combineQuantity(sales) {
    let result = [];
    sales.forEach(transaction => {
        result.push(sumQuantity(transaction));
    });
    return result;
}

function sumQuantity(salesArray) {
    return salesArray.reduce((current, next) => ({
        id: next.id,
        name: next.name,
        price: next.price,
        quantity: current.quantity + next.quantity
    }));
}

export default {
    state,
    getters,
    actions,
    mutations
}