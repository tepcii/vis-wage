import { getAccessorType } from 'typed-vuex'

import * as wage from '~/store/wage'

export const state = () => {
  return {}
}

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  //
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    wage
  }
})
