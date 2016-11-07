import * as types from './mutations_type.js'

export const state = {
  user: {},
  dataInfo: []
}

export const mutations = {
  [types.LOGIN] (state, user) {
    state.user = user
  },
  [types.GET_FOLDER_INFO] (state, dataInfo) {
    state.dataInfo = dataInfo
  }
}
