import * as types from './mutations_type.js'
import Vue from 'vue'
import serviceRestAPI from '../api/servicerestapi'

export const login = ({ commit }, {username, password}) => {
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
  console.log('service : ', serviceRestAPI.sso_login)
  return Vue.http.post(serviceRestAPI.sso_login, body, options).then((response) => {
    commit(types.LOGIN, response.body)
    return Promise.resolve()
  }, (response) => {
    return Promise.reject()
  })
}

// todo list
// add
export const addToDoList = ({ commit }, {inputInfo}) => {
  const obj = {
    value: inputInfo
  }
  commit(types.ADD_TODO_LIST, obj)
}
export const deleteToDoList = ({ commit }, {index}) => {
  commit(types.DELETE_TODO_LIST, index)
}
export const updateToDoList = ({ commit }, obj) => {
  commit(types.UPDATE_TODO_LIST, obj)
}