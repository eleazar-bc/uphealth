// import firebase from 'firebase/app';
import {db} from '../../utils/db';

const state = {
    sales: [
        // {id, name, price, quantity, createdAt}
    ]
}

const getters = {
    getAllsales: () => state.sales
};

const actions = {
    setAllSales: ({commit}, payload) => {
        db.collection('products').orderBy(payload)
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            });
            commit('SET_SALES', documents);
        });

        db.collection('transactions')
        .get()
        .then(querySnapshot => {
            const document = querySnapshot.docs.map(doc => doc.data().sales);

            if(document.length > 0) {               
                const combined = combineQuantity(document);
                commit('INCREMENT_QUANTITY', combined);
            }
        });
        console.log('---------- ---------- ----------');
        console.log(state.sales);
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
        commit('INCREMENT_QUANTITY', cart);
    },
    deleteSales: ({commit}, id) => {
        db.collection('transactions').doc(id).delete();
        commit('DELETE_SALES', id);
    }
};

const mutations = {
    SET_SALES: (state, sales) => state.sales = sales,
    INCREMENT_QUANTITY: (state, items) => {
        items.forEach(item => {
            const stateItem = state.sales.find(med => med.id == item.id);
            if(stateItem.quantity){
                stateItem.quantity = stateItem.quantity + item.quantity;
            } else {
                stateItem.quantity = item.quantity;
            }
        });
    },
    DELETE_SALES: (state, id) => state.sales = state.sales.filter(item => item.id !== id)
};

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