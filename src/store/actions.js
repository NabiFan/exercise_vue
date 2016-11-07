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
    alert('error')
    return Promise.reject()
  })
}

export const getFolderInfo = ({ commit }, {folderPath, owner_id}) => {
  const body = {
    path: folderPath.path,
    owner_id: owner_id,
    // page_number: angular.isObject(folderPath) && folderPath.page_number > 0 ? folderPath.page_number : 1,
    // items_per_page: angular.isObject(folderPath) && folderPath.items_per_page >= 0 ? folderPath.items_per_page : 25,
    display_note: true,
    detail: true,
    id: (folderPath.id) ? folderPath.id : ''
  }
  console.log(body)
}
