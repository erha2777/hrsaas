// src/store/index.ts
import { createStore } from 'vuex'


import permission from './modules/permission'
import user from './modules/user'
import app from './modules/app'
import getters from './getters'
import settings from './modules/setting'

// 创建一个新的 store 实例 并导出
export default createStore({
  modules:{
    app,
    settings,
    permission,
    user
  },
  getters
})