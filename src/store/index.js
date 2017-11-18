import Vue from 'vue'
import Vuex from 'vuex'
import address from './modules/address'
import shopcart from './modules/shopcart'
import user from './modules/user'
import productList from './modules/productList'

Vue.use(Vuex)

const state = {
  secondList: null // 二级商品目录信息
}

export default new Vuex.Store({
  state,
  modules: {
    address,
    shopcart,
    user,
    productList
  }
})
