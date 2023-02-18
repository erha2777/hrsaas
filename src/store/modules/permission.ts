// 专门处理权限路由的模块
import { constantRoutes, asyncRoutes } from '@/router'
import { RouteRecordName, RouteRecordRaw } from 'vue-router'

const state = {
  // 一开始 肯定拥有静态路由的权限
  routes: constantRoutes // 路由表 表示 当前用户所拥有的所有的路由的数组
}
const mutations = {
  // 定义修改routes的mutations
  // newRoutes可以认为是 用户登录 通过权限所得到的动态路由的部分
  setRoutes(state:any, newRoutes:any) {
    // 这么写业务不太正确
    // state.routes = [...state.routes, ...newRoutes]
    // 应该是每次更新 都应该在静态路由的基础上进行追加
    
    state.routes = [...constantRoutes, ...newRoutes]
    
  }
}
const actions = {
  // 筛选权限路由
  // 第二个参数为当前用户的所拥有的菜单权限
  // menus:["settings","permissions"]
  // asyncRoutes 是所有的动态路由
  // asyncRoutes [{path:'setting',name:'setting'},{}]
  filterRoutes(context:any, menus:any) {
    const routes: RouteRecordRaw[] = []
    // 筛选出 动态路由中和menus中能够对上的路由
    menus.forEach((key: RouteRecordName | undefined) => {
      // key就是标识
      // asyncRoutes 找 有没有对象中的name属性等于 key的 如果找不到就没权限 如果找到了 要筛选出来
      routes.push(...asyncRoutes.filter(item => item.name === key)) // 得到一个数据 有可能 有元素 也有可能是空数组
    })
    // 得到的routes是所有模块中满足权限要求的路由数组
    // routes就是当前用户所有拥有的 动态路由的权限
    context.commit('setRoutes', routes) // 将动态路由提交给mutaions
    return routes // 这里为什么还要return state数据 是用来 显示左侧菜单用的 return 是给路由addRoutes用的
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
