const state = () => ({
    design: {},
})

export const getterTypesDesign = {
    getDesign: '[design][getter] Get Desin',
}

export const mutationTypesDesign = {
    putDesign: '[design][mutation] Put Design',
}

export const actionTypesDesign = {
    fetchDesign: '[design][action] Load Design',
}

const getters = {
    [getterTypesDesign.getDesign]: (state) => state.design,
}

const mutations = {
    [mutationTypesDesign.putDesign](state, data) {
        state.design = data
    },
}

const actions = {
    [actionTypesDesign.fetchDesign]({ commit }, data) {
        commit(mutationTypesDesign.putDesign, data)
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}