import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  wage: 0 as number
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  wage: state => state.wage
})

export const mutations = mutationTree(state, {
  setWage (state, wage: number): void {
    state.wage = wage
  }
})

export const actions = actionTree({ state, getters, mutations }, {
  getOlder ({ getters, commit }) {
    const currentWage = getters.wage
    commit('setWage', currentWage + 1)
  }
})
