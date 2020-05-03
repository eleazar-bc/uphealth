import {db} from '../../db';

const state = {
    medicines: []
};

const getters = {};

const actions = {
    getAllMedicines: ({commit}) => {
        db.collection('products')
        .get()
        .then(querySnapshot => {
            const documents = querySnapshot.docs.map(doc => {
                const result = doc.data()
                result.id = doc.id
                return result
            });
            commit('setMedicines', documents)
        })
    }
};

const mutations = {
    setMedicines: (state, medicines) => state.medicines = medicines
    }

export default {
    state,
    getters,
    actions,
    mutations
}