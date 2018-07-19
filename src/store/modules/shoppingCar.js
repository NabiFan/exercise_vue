import Vue from 'vue'
// import serviceRestAPI from '../../api/servicerestapi'
import * as types from '../mutations_type.js'

const state = {
    productList: [{
            id: '1540',
            name: '起司豬排堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1540.png?',
            price: 79
        },
        {
            id: '1081',
            name: '培根牛肉堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1081.png?',
            price: 105
        },
        {
            id: '1060',
            name: '雙層四盎司牛肉堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1060.png?',
            price: 115
        },
        {
            id: '1059',
            name: '四盎司牛肉堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1059.png?',
            price: 85
        },
        {
            id: '1058',
            name: '大麥克',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1058.png?',
            price: 79
        },
        {
            id: '1044',
            name: '雙層牛肉吉事堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1044.png?',
            price: 75
        },
        {
            id: '1317',
            name: '勁辣鷄腿堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1317.png?',
            price: 82
        },
        {
            id: '1315',
            name: '板烤鷄腿堡',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1315.png?',
            price: 85
        },
        {
            id: '1309',
            name: '原味麥脆鷄',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1309.png?',
            price: 50
        },
        {
            id: '1310',
            name: '辣味麥脆鷄',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1310.png?',
            price: 50
        },
        {
            id: '1300',
            name: '九塊麥克鷄塊',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1300.png?',
            price: 95
        },
        {
            id: '1302',
            name: '六塊麥克鷄塊',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1302.png?',
            price: 69
        },
        {
            id: '1217',
            name: '麥香魚',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1217.png?',
            price: 69
        },
        {
            id: '1348',
            name: '麥香鷄',
            img: 'https://drjaosdejw578.cloudfront.net/tw/static/1479831786517/assets/886/products/1348.png?',
            price: 49
        }
    ]
}

const getters = {
    getProductList: state => { return state.productList }
}

const actions = {
    changeCount({ commit }, { username, password }) {
        // const body = {
        //   user: username,
        //   password: password,
        //   location: 'none'
        // }
        // const options = {
        //   headers: {
        //     'Content-Type': 'application/json;charset=UTF-8',
        //     'ServiceName': 'box.web.prd'
        //   }
        // }
        // return Vue.http.post(serviceRestAPI.sso_login, body, options).then((response) => {
        //   commit(types.LOGIN, response.body)
        //   return Promise.resolve()
        // }, (response) => {
        //   return Promise.reject()
        // })
    }
}

const mutations = {
    [types.GET_PRODUCT_LIST](state, productList) {
        state.productList = productList
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}