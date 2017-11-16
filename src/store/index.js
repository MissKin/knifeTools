import Vue from 'vue'
import Vuex from 'vuex'
import address from './modules/address'
import shopcart from './modules/shopcart'
import user from './modules/user'

Vue.use(Vuex)

const state = {}

export default {
  state,
  modules: {
    address,
    shopcart,
    user
  }
}
