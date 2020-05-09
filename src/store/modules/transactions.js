// import firebase from 'firebase/app';
import {db} from '../../db';

const state = {
    sales: [
        // {id, name, price, quantity, total}
    ]
}

const getters = {};

const actions = {
    getAllSales: ({commit}) => {
        db.collection('transactions')
        .get()
        .then(querySnapshot => {
            const sales = querySnapshot.docs.map(doc => {
                const result = doc.data();
                result.id = doc.id
                return result;
            });
            commit('setSales', sales);
            console.log('-----getAllSales-----');
            console.log(state.sales);
        })
    },
    updateSales: ({commit}, cart) => {
        cart.forEach(item => {
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
        console.log('-----updateSales-----');
        console.log(state.sales);
    }
};

const mutations = {
    setSales: (state, sales) => state.sales = sales,
    updateSales: (state, item) => {
        if(state.sales[item.id]){
            state.sales[item.id].push(item);
        } else {
            state.sales[item.id] = [item];
        }
    }
};

// function combineItems(sales) {
//     let result = [];
//     sales.forEach(transaction => {
//         result.push(sumQuantity(transaction.sales));
//     });
//     return result;
// }
// function sumQuantity(salesArray) {
//     return salesArray.reduce((current, next) => ({
//         id: next.id,
//         name: next.name,
//         price: next.price,
//         quantity: current.quantity + next.quantity
//     }));
// }

export default {
    state,
    getters,
    actions,
    mutations
}