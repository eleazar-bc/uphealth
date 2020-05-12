const state = {
    search: ''
}

const getters = {
    getFilter: () => state.search
};

const actions = {
    updateFilter: ({commit}, search) => commit('UPDATE_FILTER', search),
    clearFilter: ({commit}) => commit('CLEAR_FILTER')
};

const mutations = {
    UPDATE_FILTER: (state, search) => state.search = search,
    CLEAR_FILTER: (state) => state.search = ''
};

export default {
    state,
    getters,
    actions,
    mutations
}