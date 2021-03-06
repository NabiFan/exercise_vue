import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login.js'
import todolist from './modules/todolist.js'
import shoppingCar from './modules/shoppingCar.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    todolist,
    shoppingCar
  },
  strict: true
})
