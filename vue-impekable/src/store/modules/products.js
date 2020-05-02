import api from '../../api/medicines';

const state = {
    medicines: []
};

const getters = {};

const actions = {
    getAllMedicines: ({commit}) => {
        api.getMedicines(medicines => commit('setMedicines', medicines))
    }
};

const mutations = {
    setMedicines: (state, medicines) => state.medicines = medicines
};

export default {
    state,
    getters,
    actions,
    mutations
}