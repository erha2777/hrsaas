import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth.js'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { resetRouter } from '@/router'

// 状态
const state = {
  token: getToken(), // 设置token为共享状态 初始化vuex的时候 就先从缓存中读取
  userInfo: {} // 这里定义一个空对象
}

const mutations = {
  setToken(state:any, token:any) {
    state.token = token // 将数据设置给vuex
    // 同步给缓存
    setToken(token)
  },
  removeToken(state:any) {
    state.token = null // 将vuex的数据置空
    removeToken() // 同步到缓存
  },
  setUserInfo(state:any, result:any) {
    state.userInfo = result // 这样是响应式
    // state.userInfo = { ...result }
  },
  removeUserInof(state:any) {
    state.userInfo = {}
  }
}

const actions = {
  async login(context:any, data:any) {
    // 调用api的结果
    const result = await login(data) // 拿到token
    context.commit('setToken', result) // 设置token
    // 拿到token说明登录成功
    setTimeStamp() // 设置当前时间戳
  },
  async getUserInfo(context:any) {
    const result:any = await getUserInfo()
    // 获取用户详情 详细资料
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo }) // 提交到mutations
    return result // 给后期做权限的伏笔
  },
  // 登出操作
  logout(context:any) {
    // 删除token
    context.commit('removeToken')
    // 删除用户资料
    context.commit('removeUserInof')
    // 重置路由
    resetRouter()
    // 设置权限模块下的路由为初始状态
    // Vuex子模块怎么调用子模块的action 都没加锁的情况下 可以随意调用
    // 但是加了命名空间的子模块 怎么调用另一个加了命名空间的子模块的mutations
    // 加了命名空间的context指的不是全局context
    // mutations名称 载荷payload 第三个参数 {root:true} 调用根级的mutaion或者action
    context.commit('permission/setRoutes', [], { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
