// import firebase from 'firebase/app';
import {db} from '../../db';

const state = {
    sales: [
        // {id, name, price, quantity, total}
    ]
}

const getters = {
    getAllsales: () => state.sales
};

const actions = {
    setAllSales: ({commit}) => {
        db.collection('transactions')
        .get()
        .then(querySnapshot => {
            const sales = querySnapshot.docs.map(doc => {
                const result = doc.data();
                result.id = doc.id
                return result;
            });
            commit('setSales', sales);
        })
    },
    updateSales: ({commit}, cart) => {
        cart.forEach(item => {
            item.createdAt = new Date();
            const itemRef = db.collection('transactions').doc(item.id);
            db.runTransaction(transaction => {
                return transaction.get(itemRef).then(doc => {
                    if (!doc.data()) {
                        transaction.set(itemRef, {
                            sales: [item]
                        });
                    } else {
                        const itemSales = doc.data().sales;
                        itemSales.push(item);
                        transaction.update(itemRef, { sales: itemSales });
                    }
                });
            })
            commit('updateSales', item);
        });
    },
    deleteSales: ({commit}, id) => {
        db.collection('transactions').doc(id).delete();
        commit('deleteSales', id);
    }
};

const mutations = {
    setSales: (state, sales) => state.sales = combineItems(sales),
    updateSales: (state, item) => {
        const sale = state.sales.find(sale => sale.id === item.id);
        if(sale){
            sale.quantity = sale.quantity + item.quantity;
        } else {
            state.sales.unshift(item);
        }
    },
    deleteSales: (state, id) => state.sales = state.sales.filter(item => item.id !== id)
};

function combineItems(sales) {
    let result = [];
    sales.forEach(transaction => {
        result.push(sumQuantity(transaction.sales));
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