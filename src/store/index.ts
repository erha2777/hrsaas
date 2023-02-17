// src/store/index.ts
import { createStore } from 'vuex'


import permission from './modules/permission'
import user from './modules/user'

// 创建一个新的 store 实例 并导出
export default createStore({
  modules:{
    permission,
    user
  },
  state () {
    return {
      settings: {
        fixedHeader:true
      }
    }
  },
  mutations: {
    
  }
})