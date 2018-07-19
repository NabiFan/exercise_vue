import Vue from 'vue'
import serviceRestAPI from '../../service'
import * as types from '../mutations_type.js'

const state = {
    user: {}
}

const getters = {
    getUser: state => { return state.user }
}

const actions = {
    login({ commit }, { username, password }) {
        const body = {
            user: username,
            password: password,
        }
        const options = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        }
        return Vue.http.post(serviceRestAPI.user_get_login, body, options).then((response) => {
            commit(types.LOGIN, response.body)
            return Promise.resolve()
        }, (response) => {
            return Promise.reject()
        })
    }
}

const mutations = {
    [types.LOGIN](state, user) {
        state.user = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}