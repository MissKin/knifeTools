import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/pages/index/index.vue')), 'index')
const ProductList = r => require.ensure([], () => r(require('@/pages/productList/productlist.vue')), 'ProductList')
Vue.use(Router)

const myRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/productList',
      component: ProductList,
      name: 'Productlist'
    }
  ]
})

export default myRouter
