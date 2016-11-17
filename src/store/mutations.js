import * as types from './mutations_type.js'

export const state = {
  user: {},
  todolist: [{ 
    value: '123',
    checked: false 
  }]
}

export const mutations = {
  [types.LOGIN] (state, user) {
    state.user = user
  },
  [types.ADD_TODO_LIST] (state, inputInfo) {
    state.todolist.push(inputInfo)
  },
  [types.DELETE_TODO_LIST] (state, index) {
    state.todolist.splice(index, 1)
  },
  [types.UPDATE_TODO_LIST] (state, obj) {
    state.todolist[ obj.index ].value = obj.inputInfo
    state.todolist[ obj.index ].checked = obj.checked
  }
}
