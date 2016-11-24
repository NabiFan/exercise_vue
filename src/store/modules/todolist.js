import * as types from '../mutations_type.js'

const state = {
  todolist: [{ 
    value: '123',
    checked: false
  }]
}

const getters = {
  getToDoList: state => { return state.todolist }
}

const actions = {
  addToDoList ({ commit }, {inputInfo}) {
    const obj = {
      value: inputInfo
    }
    commit(types.ADD_TODO_LIST, obj)
  },
  deleteToDoList ({ commit }, {index}) {
    commit(types.DELETE_TODO_LIST, index)
  },
  updateToDoList ({ commit }, obj) {
    commit(types.UPDATE_TODO_LIST, obj)
  }
}

const mutations = {
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

export default {
  state,
  getters,
  actions,
  mutations
}