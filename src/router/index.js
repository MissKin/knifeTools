import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/pages/index/index.vue')), 'index')
const ProductList = r => require.ensure([], () => r(require('@/pages/productList/productlist.vue')), 'ProductList')
const CommodityDetail = r => require.ensure([], () => r(require('@/pages/commodityDetail/commoditydetail.vue')), 'CommodityDetail')
const testVue = r => require.ensure([], () => r(require('@/pages/test.vue')), 'testVue')
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
      path: '/productList/:productName',
      component: ProductList,
      name: 'Productlist'
    },
    {
      path: '/commodityDetail/:commodityID',
      component: CommodityDetail,
      name: 'commodityDetail'
    },
    {
      path: '/test',
      name: 'testVue',
      component: testVue
    }
  ]
})

export default myRouter
