// import {db} from '../../db';
import medicines from '../../api/medicines';

const state = {
    medicines: []
};

const getters = {};

const actions = {
    getAllMedicines: ({commit}) => {
        medicines.getAllMedicines((medicines) => commit('setMedicines', medicines));

        // db.collection('products')
        // .get()
        // .then(querySnapshot => {
        //     const documents = querySnapshot.docs.map(doc => {
        //         const result = doc.data()
        //         result.id = doc.id
        //         return result
        //     });
        //     commit('setMedicines', documents)
        // })
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