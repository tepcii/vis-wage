import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  wage: 0 as number,
  countingWage: 0 as number
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  wage: state => state.wage,
  countingWage: state => state.countingWage
})

export const mutations = mutationTree(state, {
  setWage (state, wage: number): void {
    state.wage = wage
  },
  setCountingWage (state, wage: number) : void {
    state.countingWage = wage
  }
})

export const actions = actionTree({ state, getters, mutations }, {
})
