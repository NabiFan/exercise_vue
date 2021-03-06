import './lib/bootstrap/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import './directives'

// init
Vue.use(VueRouter)
Vue.use(VueResource)

// Page
import login from './page/Login'
import home from './page/home'
import components from './components/index'
// import todolist from './components/todolist'
// import hello from './components/Hello'
// import folderinfo from './components/folderinfo'

// const todolist = { template: '<div>Info</div>' }


// Router list!
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/home',
            component: home,
            children: [{
                    path: '',
                    name: 'hello',
                    component: components.hello
                },
                {
                    path: 'todolist',
                    name: 'todolist',
                    component: components.todolist
                },
                {
                    path: 'folderinfo',
                    name: 'folderinfo',
                    component: components.folderinfo
                },
                {
                    path: 'shoppingCar',
                    name: 'shoppingCar',
                    component: components.shoppingCar
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        { path: '/*', redirect: '/login' }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

// check Login!
router.beforeEach((to, from, next) => {
    // TODOS token
    const token = store.state.login.user.user
    if (token) {
        if (to.name === 'login') {
            next({ path: '/home' })
            return
        }
    } else {
        if (to.name !== 'login') {
            next({ path: '/login' })
            return
        }
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')