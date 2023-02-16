// src/store/index.ts
import { createStore } from 'vuex'

// 创建一个新的 store 实例 并导出
export default createStore({
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