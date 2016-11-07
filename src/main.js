import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

// init
Vue.use(VueRouter)
Vue.use(VueResource)

// Page
import login from './page/Login.vue'
import home from './page/home.vue'
import count from './components/count.vue'

// Router list!
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    { path: '/*', redirect: '/login' }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// check Login!
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (!!token) {
    if(to.name === 'login'){
      next({ path: '/home' })
      return
    }
  } else {
    if(to.name !== 'login'){
      next({ path: '/login' })
      return
    }
  }
  next()
})

// Create and mount the root instance.
// replace the content of <div id="app"></div> with App
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h( App )
})