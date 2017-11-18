
import { GETSECONDLIST } from './mutations-types'
export default{
  [GETSECONDLIST] (state, list) {
    console.log(list.status)
    // 请求状态 为200 或者304  表示成功
    if (list.status !== 200 && list.status !== 304) {
      console.log('res 返回的状态码 不是200 或 304')
      return
    }
    state.secondList = list.data.data
  }
}
