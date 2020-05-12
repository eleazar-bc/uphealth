import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestoreIdGenerator } from '../utils/firestoreIdGenerator'

export const db = firebase
  .initializeApp({ projectId: 'uphealth-ph' })
  .firestore()

export const firestoreDb = {
  getDocuments: (collection, payload) => {
    return db.collection(collection).orderBy(payload)
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        });
      });
  },

  addDocument: (collection, item) => {
    const id = firestoreIdGenerator();
    item.createdAt = new Date();
    db.collection(collection).doc(id).set(item);
    item.id = id;
    return item;
  },

  updateDocument: (collection, item) => {
    db.collection(collection).doc(item.id).set(item);
  },

  deleteRecords: (collections, id) => {
    collections.forEach(collection => {
      db.collection(collection).doc(id).delete();
    });
  },

  decrementQuantity: (collection, item) => {
    db.collection(collection).doc(item.id).update({
      stock: firebase.firestore.FieldValue.increment(parseInt(-item.quantity))
    });
  },

  retrieveTransactions: () => {
    return db.collection('transactions')
      .get()
      .then(querySnapshot => {
        const document = querySnapshot.docs.map(doc => doc.data().sales);
        if (document.length > 0) {
          return combineQuantity(document);
        }
      });
  },

  addTransaction: (cart) => {
    cart.forEach(item => {
      const { id, name, price, quantity } = item;
      const createdAt = new Date();
      const itemRef = db.collection('transactions').doc(item.id);
      db.runTransaction(transaction => {
        return transaction.get(itemRef).then(doc => {
          if (!doc.data()) {
            transaction.set(itemRef, {
              sales: [{ id, name, createdAt, price, quantity }]
            });
          } else {
            const itemSales = doc.data().sales;
            itemSales.push({ id, name, createdAt, price, quantity });
            transaction.update(itemRef, { sales: itemSales });
          }
        });
      })
    });
  }
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