import Vue from 'vue'
import serviceRestAPI from '../../api/servicerestapi'
import * as types from '../mutations_type.js'

const state = {
  user: {}
}

const getters = {
  getUser: state => { return state.user }
}

const actions = {
  login ({ commit }, {username, password}) {
    const body = {
      user: username,
      password: password,
      location: 'none'
    }
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'ServiceName': 'box.web.prd'
      }
    }
    return Vue.http.post(serviceRestAPI.sso_login, body, options).then((response) => {
      commit(types.LOGIN, response.body)
      return Promise.resolve()
    }, (response) => {
      return Promise.reject()
    })
  }
}

const mutations = {
  [types.LOGIN] (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}