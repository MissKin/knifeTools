import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  console.log('成功res')
  return res
}, (err, code, a) => {
  window.errSave = err
  if (err.response && err.response.status === 301) {
    return {
      status: 'failed',
      data: {
        code: 301,
        message: '未登录',
        data: ''
      },
      massege: ''
    }
  } else {
    return {
      status: 'failed',
      data: {
        code: 600,
        message: '网络异常',
        data: ''
      },
      massege: ''
    }
  }
})

let baseUrl = 'http://localhost:8086/api'
export const getSecondList = () => axios.get(baseUrl + '/getSecondList')
export const getThirdList = (proId) => axios.post(baseUrl + '/getThirdList', qs.stringify({proId}))
/**
 * ==========================================
 * 获取sku详情
 * @param: {string} thirdName 具体的三级的类目
 * @returns:   {array} skuList 交易列表
 * ==========================================
 */
export const getSkuList = (thirdName) => axios.post(baseUrl + '/getSkuList', qs.stringify({thirdName}))
/**
 * ==========================================
 * 商品详情页
 * @param: {string} proId 商品唯一标识
 * @returns:   {object} skuDetail 商品详情
 * ==========================================
 */
export const getSkuDetail = (proId) => axios.post(baseUrl + '/getSkuDetail', qs.stringify({proId}))
