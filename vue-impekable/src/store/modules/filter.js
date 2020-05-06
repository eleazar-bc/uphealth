const state = {
    search: ''
}

const getters = {
    getFilter: () => state.search
};

const actions = {
    updateFilter: ({commit}, search) => commit('updateFilter', search),
    clearFilter: ({commit}) => commit('clearFilter')
};

const mutations = {
    updateFilter: (state, search) => state.search = search,
    clearFilter: (state) => state.search = ''
};

export default {
    state,
    getters,
    actions,
    mutations
}