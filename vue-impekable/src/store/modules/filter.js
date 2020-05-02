const state = {
    search: ''
}

const getters = {
    getFilter: () => state.search
};

const actions = {
    updateFilter: ({commit}, search) => commit('updateFilter', search)
};

const mutations = {
    updateFilter: (state, search) => state.search = search
};

export default {
    state,
    getters,
    actions,
    mutations
}