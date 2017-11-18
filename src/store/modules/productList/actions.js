import {getSecondList} from '@/service/get-data'
import {GETSECONDLIST} from './mutations-types'

export default{
  async getSecondList ({commit}, callback) {
    console.log('跨域')
    let res = await getSecondList()
    commit(GETSECONDLIST, res)
    // callback 方法什么时候执行
  }
}
